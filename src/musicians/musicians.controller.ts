import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateMusicianDto, UpdateMusicianDto } from './dto/musician.dto';
import { MusiciansService } from './musicians.service';

@Controller('musicians')
export class MusiciansController {
  constructor(private musiciansService: MusiciansService) {}

  @Get()
  async getMusicians() {
    return await this.musiciansService.findAll();
  }

  @Get(':id')
  async getMusician(@Param('id') id: string) {
    try {
      return await this.musiciansService.findOne(id);
    } catch (error) {
      console.log('error', error);
      return { message: 'Musician not found' };
    }
  }

  @Post()
  async create(@Body() createMusicianDto: CreateMusicianDto) {
    return await this.musiciansService.create(createMusicianDto);
  }

  @Put(':id')
  async update(
    @Body() updateMusicianDto: UpdateMusicianDto,
    @Param('id') id: string,
  ) {
    try {
      return await this.musiciansService.update(id, updateMusicianDto);
    } catch (error) {
      console.log('error', error);
      return { message: 'Musician not found' };
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      await this.musiciansService.delete(id);
      return { message: 'Musician deleted' };
    } catch (error) {
      console.log('error', error);
      return { message: 'Musician not found' };
    }
  }
}
