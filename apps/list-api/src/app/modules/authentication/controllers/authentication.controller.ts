import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '@list-ng/shared/data-access';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('login')
  login(@Body() body) {
    const { email, password } = body;
    return this.authService.signIn(email, password);
  }

  @Post('register')
  register(@Body() body) {
    const user: Partial<User> = {
      username: body.username,
      email: body.email,
    };
    return this.authService.signUp(user, body.password);
  }
}
