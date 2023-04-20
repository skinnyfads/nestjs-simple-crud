import { Module } from '@nestjs/common';
import { TeamController } from './teams.controller';
import { TeamService } from './teams.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TeamController],
  providers: [TeamService, PrismaService],
})
export class TeamModule {}
