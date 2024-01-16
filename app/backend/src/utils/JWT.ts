import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';

export const JWTUtils = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

export const secret = process.env.JWT_SECRET || 'qwertyaeiou123456789';

export function verifyToken(token: string): JwtPayload | string {
  const decoded = jwt.verify(token, secret);
  console.log(decoded);
  return decoded;
}
