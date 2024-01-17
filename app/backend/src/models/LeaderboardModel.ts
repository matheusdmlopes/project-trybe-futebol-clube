import sequelize = require('sequelize');
import ILeaderboardModel from '../Interfaces/leaderboard/ILeaderboardModel';
import SequelizeMatches from '../database/models/SequelizeMatches';
import SequelizeTeams from '../database/models/SequelizeTeams';
import { IMatches } from '../Interfaces/matches/IMatches';

class LeaderboardModel implements ILeaderboardModel {
  private model = SequelizeMatches;
  private allAttributes = [
    [sequelize.col('homeTeam.team_name'), 'name'],
    [sequelize.literal(`SUM(home_team_goals > away_team_goals) * 3
    + SUM(home_team_goals = away_team_goals)`), 'totalPoints'],
    [sequelize.fn('count', sequelize.col('*')), 'totalGames'],
    [sequelize.literal('SUM(home_team_goals > away_team_goals)'), 'totalVictories'],
    [sequelize.literal('SUM(home_team_goals = away_team_goals)'), 'totalDraws'],
    [sequelize.literal('SUM(home_team_goals < away_team_goals)'), 'totalLosses'],
    [sequelize.fn('sum', sequelize.col('home_team_goals')), 'goalsFavor'],
    [sequelize.fn('sum', sequelize.col('away_team_goals')), 'goZalsOwn'],
    [sequelize.literal('SUM(home_team_goals) - SUM(away_team_goals)'), 'goalsBalance'],
    [sequelize.literal(`ROUND(100 * (SUM(home_team_goals > away_team_goals) * 3
    + SUM(home_team_goals = away_team_goals)) / (COUNT(*) * 3), 2)`), 'efficiency'],
  ] as sequelize.FindAttributeOptions | undefined;

  async leaderboardHome(): Promise<IMatches[]> {
    const response = await this.model.findAll({
      include: { model: SequelizeTeams, as: 'homeTeam', attributes: [] },
      attributes: this.allAttributes,
      where: { inProgress: false },
      group: 'home_team_id',
      order: [['totalPoints', 'DESC'], ['totalVictories', 'DESC'],
        ['goalsBalance', 'DESC'], ['goalsFavor', 'DESC']],
    });

    return response;
  }
}

export default LeaderboardModel;
