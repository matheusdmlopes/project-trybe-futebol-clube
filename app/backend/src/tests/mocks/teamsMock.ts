import ITeams from "../../Interfaces/teams/ITeams";

const mockListTeam: ITeams[] = [
    {
      id: 1,
      teamName: "Avaí/Kindermann"
    },
    {
      id: 2,
      teamName: "Bahia"
    },
    {
      id: 3,
      teamName: "Botafogo"
    }
  ]

const mockTeam: ITeams = {
    id: 3,
    teamName: "Botafogo"
  }; 

export {
  mockListTeam,
  mockTeam
};