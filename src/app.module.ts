import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './teams/teams.module';

@Module({
  imports: [TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
