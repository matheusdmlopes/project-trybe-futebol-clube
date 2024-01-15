import * as jwt from 'jsonwebtoken';
import IToken from '../Interfaces/IToken';
import IUser from '../Interfaces/users/IUser';
import { secret } from '../utils/JWT';

export default class TokenJWT implements IToken {
  private jwt = jwt;
  generate(user: IUser): string {
    const { password, ...userInfos } = user;
    const token = this.jwt.sign(userInfos, secret);
    return token;
  }
}
