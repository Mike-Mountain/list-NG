import { Module } from '@nestjs/common';
import { AuthenticationController } from './controllers/authentication.controller';
import { AuthenticationService } from './services/authentication.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
  exports: [AuthenticationController, AuthenticationService],
})
export class AuthenticationModule {}
