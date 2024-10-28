import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Musician } from './musician.schema';
import { CreateMusicianDto, UpdateMusicianDto } from './dto/musician.dto';

@Injectable()
export class MusiciansService {
  constructor(
    @InjectModel(Musician.name) private musicianModel: Model<Musician>,
  ) {}

  async create(createMusicianDto: CreateMusicianDto): Promise<Musician> {
    const createdMusician = new this.musicianModel(createMusicianDto);
    return createdMusician.save();
  }

  async findOne(id: string): Promise<Musician> {
    const musician = await this.musicianModel.findById(id).exec();

    if (!musician) {
      throw new Error('Musician not found');
    }

    return musician;
  }

  async findAll(): Promise<Musician[]> {
    return this.musicianModel.find().exec();
  }

  async update(
    id: string,
    updateMusicianDto: UpdateMusicianDto,
  ): Promise<Musician> {
    const updatedMusician = await this.musicianModel
      .findByIdAndUpdate(id, updateMusicianDto, { new: true })
      .exec();

    console.log('updatedMusician', updatedMusician);

    if (!updatedMusician) {
      throw new Error('Musician not found');
    }

    return updatedMusician;
  }

  async delete(id: string): Promise<Musician> {
    const deletedMusician = await this.musicianModel
      .findByIdAndDelete(id)
      .exec();

    if (!deletedMusician) {
      throw new Error('Musician not found');
    }

    return deletedMusician;
  }
}
