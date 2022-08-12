import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { User } from '@list-ng/shared/data-access';
import { config } from 'config/config';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly http: HttpService,
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
  ) {}

  public signUp(user: Partial<User>, password: string) {
    const firebaseBody = {
      email: user.email,
      password,
      returnSecureToken: true,
    };
    this.http
      .post<any>(
        `${config.authApiUrl}:signUp?key=${config.apiKey}`,
        firebaseBody
      )
      .pipe(
        map((res) => {
          if (res.data.idToken) {
            return this.userRepository.insert({
              id: res.data.localId,
              username: user.username,
              email: res.data.email,
              groups: [],
            });
          } else {
            // TODO: Implement proper error handling
            return res.data;
          }
        })
      );
  }

  signIn(email: string, password: string): Observable<any> {
    const firebaseBody = {
      email,
      password,
      returnSecureToken: true,
    };
    return this.http
      .post<any>(
        `${config.authApiUrl}:signInWithPassword?key=${config.apiKey}`,
        firebaseBody
      )
      .pipe(
        map((res) => {
          if (res.data.idToken) {
            return this.userRepository.findOneBy({ id: res.data.localId });
          } else {
            // TODO: Implement proper error handling
            return res.data;
          }
        })
      );
  }
}
