import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'blogs' })
export class Blog {
  @ApiProperty({
    description: 'Blog ID',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Blog Title',
    example: 'Sony',
  })
  @Column()
  title: string;

  @ApiProperty({
    description: 'Blog Description',
    example: 'Sony Description',
  })
  @Column()
  description: string;

  @ApiProperty({
    description: 'Blog Category',
    example: 'Electronics',
  })
  @Column()
  category: string;

  @ApiProperty({
    description: 'Number of views for the Blog',
    example: 12,
  })
  @Column()
  numViews: number;

  @ApiProperty({
    description: 'Like to the Blog',
    example: true,
    default: false,
  })
  @Column()
  isLiked: boolean;

  @ApiProperty({
    description: 'Dislike to the Blog',
    example: true,
    default: false,
  })
  @Column()
  isDisliked: boolean;
}
