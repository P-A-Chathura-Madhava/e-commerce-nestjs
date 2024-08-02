import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiTags("Users")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiCreatedResponse({
    description: "User Created",
    type: User
  })
  @ApiBadRequestResponse({description: "Failed to create the User"})
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOkResponse()
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOkResponse()
  @ApiBadRequestResponse({
    description: "User Not Found",
    type: User
  })
  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }

  @ApiOkResponse({
    description: "User Updated",
    type: User
  })
  @ApiBadRequestResponse({description: "Failed to update the User"})
  @Patch(':username')
  update(@Param('username') username: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(username, updateUserDto);
  }

  @ApiOkResponse({
    description: "User Deleted",
    type: User
  })
  @ApiBadRequestResponse({description: "Failed to delete the User"})
  @Delete(':username')
  remove(@Param('username') username: string) {
    return this.usersService.remove(username);
  }
}
