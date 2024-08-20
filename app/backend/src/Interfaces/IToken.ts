import IUser from './users/IUser';

export default interface IToken {
  generate(user: IUser): string
}
