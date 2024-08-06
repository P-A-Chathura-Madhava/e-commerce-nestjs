import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    // get the user from users service
    const user = await this.usersService.findOne(username);

    if (user && user.password === password) {
      // destructure to avoid returning username and password
      const { password, username, ...rest } = user;
      //   console.log(rest);

      return rest;
    }

    return null;
  }

  async login(user: any) {
    const payload = { name: user.name, sub: user.id, role: user.role };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
