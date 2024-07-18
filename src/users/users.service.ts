import { Injectable } from '@nestjs/common';
import { Role } from 'src/enums/role.enum';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

// This should be a real class/interface representing a user entity
// export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository : Repository<User>
  ) {}

  // private readonly users = [
  //   {
  //     userId: 1,
  //     username: 'john',
  //     password: 'changeme',
  //     roles: Role.Admin
  //   },
  //   {
  //     userId: 2,
  //     username: 'maria',
  //     password: 'guess',
  //     roles: Role.User
  //   },
  // ];

  async findOne(username: string): Promise<User | undefined> {
    // const users = [
    //   {
    //     id: 1,
    //     username: 'john',
    //     password: 'changeme',
    //     roles: Role.Admin
    //   },
    //   {
    //     id: 2,
    //     username: 'maria',
    //     password: 'guess',
    //     roles: Role.User
    //   },
    // ];

    // return users.find(user => user.username === username);
    return null;
  }

  async create(createUserDto: CreateUserDto) {
    // console.log(createUserDto);
    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);      
  }

  async findAll() {
    return await this.usersRepository.find()
}

}