import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';
import { Model } from 'mongoose';

import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async create(cat: Cat) {
    const newCat = new this.catModel(cat);
    const result = await newCat.save();
    return result.id as string;
  }

  async getAll(): Promise<any> {
    const cats = await this.catModel.find().exec();
    return cats;
  }
}
