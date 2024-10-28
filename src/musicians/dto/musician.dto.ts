export class CreateMusicianDto {
  name: string;
  age: number;
  instrument: 'guitar' | 'bass' | 'drums' | 'vocals' | 'violin';
}

export class UpdateMusicianDto extends CreateMusicianDto {}
