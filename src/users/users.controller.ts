import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    async findAllUsers() {
        return this.usersService.findAll();
    }

    @Get(':username')
    async findAUser(@Param('username') username: string) {
        return this.usersService.findOne(username);
    }

    @Patch(':username')
    async update(@Param('username') username: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.updateAUser(username, updateUserDto);
    }
}
