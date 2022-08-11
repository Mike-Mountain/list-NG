import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, switchMap } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthenticationService {
  constructor(private readonly http: HttpService) {}

  signIn(email: string, password: string): Observable<any> {
    const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`;
    const body = {
      email,
      password,
      returnSecureToken: true,
    };
    return this.http.post<any>(authUrl, body).pipe(
      switchMap((firebaseUser) => {
        // TODO: Sign in here.
        return this.http.post(authUrl);
      })
    );
  }
}
