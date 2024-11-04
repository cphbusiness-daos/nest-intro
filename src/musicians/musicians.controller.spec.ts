import { Test, TestingModule } from '@nestjs/testing';
import { MusiciansController } from './musicians.controller';
import { MusiciansService } from './musicians.service';
import { MusiciansModule } from './musicians.module';

describe('AppController', () => {
  let musiciansController: MusiciansController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MusiciansController],
      providers: [MusiciansService],
      imports: [MusiciansModule],
    }).compile();

    musiciansController = app.get<MusiciansController>(MusiciansController);
  });

  describe('root', () => {
    test('should be defined', () => {
      expect(musiciansController).toBeDefined();
    });
  });
});
