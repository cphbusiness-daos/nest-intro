import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('MusiciansController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/musicians')
      .expect(200)
      .expect([
        {
          _id: '671f733e5c35df4f1f7fcd7a',
          name: 'Christian the Musician',
          age: 32,
          instrument: 'guitar',
          __v: 0,
        },
      ]);
  });
});
