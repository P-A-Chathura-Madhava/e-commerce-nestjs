import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserNotFound } from 'src/exceptions/user-notfound.exception';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(username: string) {
    try {
      return await this.usersRepository.findOne({ where: { username } });      
    } catch (error) {
      throw new UserNotFound();
    }
  }

  async update(username: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(username);
    if (!user) {
      throw new UserNotFound();
    }
    return await this.usersRepository.update(user, updateUserDto);
  }

  async remove(username: string) {
    const user = await this.findOne(username);
    if (!user) {
      throw new UserNotFound();
    }
    return await this.usersRepository.remove(user);
  }
}
