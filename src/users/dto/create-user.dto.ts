import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Name of the User',
    example: 'Kasun',
  })
  name: string;

  @ApiProperty({
    description: 'Username',
    example: 'kasunsampath',
  })
  username: string;

  @ApiProperty({
    description: 'Address',
    example: 'Colombo',
  })
  address: string;

  @ApiProperty({
    description: 'Password',
    example: 'kasunsPassword',
  })
  password: string;

  @ApiProperty({
    description: 'Role',
    default: 'user',
    example: 'user',
  })
  role: string;
}
