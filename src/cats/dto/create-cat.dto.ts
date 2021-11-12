import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  breed: string;
}
