import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MusiciansController } from './musicians.controller';
import { MusiciansService } from './musicians.service';
import { Musician, MusicianSchema } from './musician.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Musician.name, schema: MusicianSchema },
    ]),
  ],
  controllers: [MusiciansController],
  providers: [MusiciansService],
})
export class MusiciansModule {}
