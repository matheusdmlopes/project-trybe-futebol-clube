import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';
// import { verifyToken } from '../utils/JWT';

export default class UserController {
  constructor(
    private userService: UserService = new UserService(),
  ) {}

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const serviceResponse = await this.userService.login(email, password);
    // console.log(serviceResponse);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      const code = mapStatusHTTP(serviceResponse.status);
      return res.status(code).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }

  async userRole(req: Request, res: Response) {
    const { email } = req.body.user;

    const { status, data } = await this.userService.getRole(email);

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
