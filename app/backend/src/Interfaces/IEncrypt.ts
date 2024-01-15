export interface IEncrypt {
  compare(password: string, hash: string): Promise<boolean>
}
