import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupsEntity } from './entities/groups.entity';
import { GroupsController } from './controller/groups.controller';
import { GroupsService } from './services/groups.service';

@Module({
  imports: [TypeOrmModule.forFeature([GroupsEntity])],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
