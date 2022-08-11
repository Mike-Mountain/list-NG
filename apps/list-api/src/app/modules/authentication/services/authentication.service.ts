import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, switchMap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly http: HttpService,
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
  ) {}

  signIn(email: string, password: string): Observable<any> {
    const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`;
    const body = {
      email,
      password,
      returnSecureToken: true,
    };
    return this.http.post<any>(authUrl, body).pipe(
      switchMap((firebaseUser) => {
        this.userRepository.create({
          username: firebaseUser.data.username,
          email: firebaseUser.data.email,
        });
        return this.userRepository.findOneBy({
          username: firebaseUser.data.username,
        });
      })
    );
  }
}
