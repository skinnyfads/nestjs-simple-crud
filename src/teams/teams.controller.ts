import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { TeamService } from './teams.service';
import { Team as TeamModel, Prisma } from '@prisma/client';
import { Team } from 'src/interfaces/team.interface';
import getRandomNumber from 'src/extra/getRandomNumber';

@Controller()
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get('teams/find/:id')
  async getTeamById(@Param('id') id: string): Promise<TeamModel> {
    return this.teamService.find({ id: Number(id) });
  }

  @Get('teams/find')
  // i've added a question mark here in parameter body
  // cause i think this can make the req.body optional
  // so that i can implement both teamService findMany() and findAll()
  // but if it doesn't work, i will delete this question marks
  // and try to find any other way
  async getAllTeams(@Body() body?: Partial<Team>): Promise<TeamModel[]> {
    if (body) return this.teamService.findMany(body);
    return this.teamService.findAll();
  }

  @Post('teams/new')
  async createTeam(@Body() body: Omit<Team, 'strength'>): Promise<TeamModel> {
    const strength = getRandomNumber(1, 10);
    const newTeam = { strength, ...body };
    return this.teamService.create(newTeam);
  }

  @Put('teams/edit/:id')
  async updateTeam(
    @Param('id') id: string,
    @Body() data: Partial<Team>,
  ): Promise<TeamModel> {
    return this.teamService.update({ where: { id: Number(id) }, data });
  }

  @Delete('teams/delete/all')
  async deleteAllTeams(): Promise<Prisma.BatchPayload> {
    return this.teamService.removeAll();
  }

  @Delete('teams/delete/:id')
  async deleteTeam(@Param('id') id: string): Promise<TeamModel> {
    return this.teamService.remove({ id: Number(id) });
  }

  @Delete('teams/delete')
  async deleteTeams(
    @Body() whereData: Partial<Team>,
  ): Promise<Prisma.BatchPayload> {
    return this.teamService.removeMany(whereData);
  }
}
