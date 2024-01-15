import IToken from '../Interfaces/IToken';
import { IDecrypt } from '../Interfaces/IDecrypt';
import UserModel from '../models/UserModel';
import { IUserModel } from '../Interfaces/users/IUserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
// import { NewEntity } from '../Interfaces/index';
import Decrypter from './DecrypterService';

import TokenJWT from './JWTService';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
    private decrypt: IDecrypt = new Decrypter(),
    private generateToken: IToken = new TokenJWT(),
  ) {}

  public async login(email: string, password: string): Promise<ServiceResponse<{ token: string }>> {
    const getUser = await this.userModel.getUserByEmail(email);

    if (!getUser) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const verify = await this.decrypt.compare(password, getUser.password);

    if (!verify) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const token = this.generateToken.generate(getUser);

    return {
      status: 'SUCCESSFUL',
      data: { token },
    };
  }
}
