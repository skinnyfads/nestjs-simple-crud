export interface Team {
  name: string;
  strength: number;
  logoUrl: string;
  tier: number;
}

export interface GetTeamByIdRequest {
  id: number;
}

export interface CreateTeamRequest {
  name: string;
  logoUrl: string;
  tier: number;
}

export interface UpdateTeamRequest {
  where: TeamId;
  data: Partial<Team>;
}

export interface DeleteTeamByIdRequest {
  id: number;
}

export interface DeleteManyTeamsRequest {
  where: Partial<Team>;
}

export interface TeamId {
  id: number;
}
