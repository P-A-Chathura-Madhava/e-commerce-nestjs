import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Role } from 'src/enums/role.enum';

export class CreateUserDto {
  @ApiProperty({
    description: "User Name",
    example: "Kasun"
})
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: "Password",
    example: "123@Kasun"
})
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: "User Role",
    example: "user"
})
  @IsString()
  @IsNotEmpty()
  roles: Role;
}
