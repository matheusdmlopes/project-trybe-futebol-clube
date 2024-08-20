export interface IDecrypt {
  compare(password: string, hash: string): Promise<boolean>
}
