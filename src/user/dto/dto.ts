import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  name: string;
  age: number;
}

export class ListAllEntities {
  @IsNotEmpty()
  @IsString()
  limit: string;
}
