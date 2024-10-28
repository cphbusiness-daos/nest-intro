import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MusicianDocument = HydratedDocument<Musician>;

@Schema()
export class Musician {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  instrument: string;
}

export const MusicianSchema = SchemaFactory.createForClass(Musician);
