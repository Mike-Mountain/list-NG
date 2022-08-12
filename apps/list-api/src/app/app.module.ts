import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UserEntity } from './modules/authentication/entities/user.entity';
import { GroupsModule } from './modules/groups/groups.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'OrangeInsect09',
      database: 'lists_ng',
      entities: [UserEntity],
      synchronize: false,
    }),
    AuthenticationModule,
    GroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
