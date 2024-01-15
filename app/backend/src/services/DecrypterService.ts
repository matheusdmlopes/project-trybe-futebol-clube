import * as bcrypt from 'bcryptjs';
import { IDecrypt } from '../Interfaces/IDecrypt';

export default class Decrypter implements IDecrypt {
  private bcrypt = bcrypt;

  async compare(password: string, hash: string): Promise<boolean> {
    const isValid = await this.bcrypt.compare(password, hash);
    return isValid;
  }
}
