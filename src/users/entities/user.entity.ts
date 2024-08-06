import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @ApiProperty({
    description: 'User ID',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Name of the user',
    example: 'Kasun',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'Username',
    example: 'kasun',
  })
  @Column()
  username: string;

  @ApiProperty({
    description: 'Address',
    example: 'Colombo',
  })
  @Column({ type: 'text', nullable: true })
  address: string;

  @ApiProperty({
    description: 'Password',
    example: 'kasunPassword',
  })
  @Column()
  password: string;

  @ApiProperty({
    description: 'Role',
    example: 'user',
    default: 'user',
  })
  @Column()
  role: string;
}
