import IUser from '../Interfaces/users/IUser';
import { IUserModel } from '../Interfaces/users/IUserModel';
import SequelizeUsers from '../database/models/SequelizeUsers';

export default class UserModel implements IUserModel {
  private model = SequelizeUsers;

  async getUserByEmail(email: string): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });

    if (!user) return null;

    return {
      id: user.id,
      username: user.username,
      role: user.role,
      email: user.email,
      password: user.password,
    };
  }
}
