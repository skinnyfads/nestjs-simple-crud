import { Module } from '@nestjs/common';
import { TeamModule } from './teams/teams.module';

@Module({
  imports: [TeamModule],
})
export class AppModule {}
