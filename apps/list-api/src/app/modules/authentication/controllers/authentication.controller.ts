import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from '../services/authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('login')
  login(@Body() body) {
    const { email, password } = body;
    return this.authService.signIn(email, password);
  }
}
