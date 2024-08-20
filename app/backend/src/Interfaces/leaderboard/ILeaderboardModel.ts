import { IMatches } from '../matches/IMatches';

interface ILeaderboardModel {
  leaderboardHome(): Promise<IMatches[]>,
}

export default ILeaderboardModel;
