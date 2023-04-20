import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Team, Prisma } from '@prisma/client';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TeamCreateInput): Promise<Team> {
    return this.prisma.team.create({
      data,
    });
  }

  async find(
    teamWhereUniqueInput: Prisma.TeamWhereUniqueInput,
  ): Promise<Team | null> {
    return this.prisma.team.findUnique({ where: teamWhereUniqueInput });
  }

  async findMany(teamWhereInput: Prisma.TeamWhereInput): Promise<Team[]> {
    return this.prisma.team.findMany({ where: teamWhereInput });
  }

  async findAll(): Promise<Team[]> {
    return this.prisma.team.findMany();
  }

  async update(params: {
    where: Prisma.TeamWhereUniqueInput;
    data: Prisma.TeamUpdateInput;
  }): Promise<Team> {
    return this.prisma.team.update(params);
  }

  async remove(
    teamWhereUniqueInput: Prisma.TeamWhereUniqueInput,
  ): Promise<Team> {
    return this.prisma.team.delete({
      where: teamWhereUniqueInput,
    });
  }

  async removeMany(
    teamWhereInput: Prisma.TeamWhereInput,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.team.deleteMany({ where: teamWhereInput });
  }

  async removeAll(): Promise<Prisma.BatchPayload> {
    return this.prisma.team.deleteMany();
  }
}
