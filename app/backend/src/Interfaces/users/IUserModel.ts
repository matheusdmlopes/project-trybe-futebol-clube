import IUser from './IUser';

export interface IUserModel {
  getUserByEmail(email: string): Promise<IUser | null>
}
