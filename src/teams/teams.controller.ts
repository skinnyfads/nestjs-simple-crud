import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { TeamService } from './teams.service';
import { Team as TeamModel, Prisma } from '@prisma/client';
import {
  CreateTeamRequest,
  DeleteManyTeamsRequest,
  DeleteTeamByIdRequest,
  GetTeamByIdRequest,
  UpdateTeamRequest,
} from 'src/interfaces/team.interface';
import getRandomNumber from 'src/extra/getRandomNumber';

@Controller()
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @GrpcMethod()
  getTeamById(req: GetTeamByIdRequest): Promise<TeamModel> {
    return this.teamService.find({ id: Number(req.id) });
  }

  @GrpcMethod()
  async getAllTeams(): Promise<TeamModel[]> {
    return this.teamService.findAll();
  }

  @GrpcMethod()
  async createTeam(req: CreateTeamRequest): Promise<TeamModel> {
    const strength = getRandomNumber(1, 10);
    const newTeam = { strength, ...req };
    return this.teamService.create(newTeam);
  }

  @GrpcMethod()
  async updateTeam(req: UpdateTeamRequest): Promise<TeamModel> {
    return this.teamService.update({ where: req.where, data: req.data });
  }

  @GrpcMethod()
  async deleteAllTeams(): Promise<Prisma.BatchPayload> {
    return this.teamService.removeAll();
  }

  @GrpcMethod()
  async deleteTeamById(req: DeleteTeamByIdRequest): Promise<TeamModel> {
    return this.teamService.remove({ id: req.id });
  }

  @GrpcMethod()
  async deleteManyTeams(
    req: DeleteManyTeamsRequest,
  ): Promise<Prisma.BatchPayload> {
    return this.teamService.removeMany(req.where);
  }
}
