import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateUserDto, ListAllEntities } from './dto/dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('info')
  getUserInfo(): object {
    return this.userService.getUserInfo();
  }

  @Get('detail/:id')
  @HttpCode(200)
  getDetailUser(@Param('id') id: string): object {
    return this.userService.getDetailUser(id);
  }

  @Get('student')
  findAllStudent(): Observable<any> {
    return of([]);
  }

  @Post('post-user')
  async updateUser(@Body() createUserDto: CreateUserDto) {
    const request = await createUserDto;
    return this.userService.getRequest(request);
  }

  @Get('find-all')
  @UsePipes(new ValidationPipe({ transform: true }))
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit}) items`;
  }
}
