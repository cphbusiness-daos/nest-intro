import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { MusiciansModule } from './musicians/musicians.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/business-cards-web2024'),
    CatsModule,
    MusiciansModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
