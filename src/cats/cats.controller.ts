import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Post()
  async createCat(@Body() createCatDto: CreateCatDto) {
    return await this.catService.create(createCatDto);
  }

  @Get()
  @Header('Content-Type', 'text/html')
  async getAllCat(): Promise<object> {
    return await this.catService.getAll();
  }
}
