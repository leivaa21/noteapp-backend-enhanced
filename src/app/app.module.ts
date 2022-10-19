import { Module } from '@nestjs/common';
import { NotesModule } from 'src/contexts/notes/infrastructure/notes.module';
import AppController from './app.controller';
@Module({
  imports: [NotesModule],
  controllers: [AppController],
})
export class AppModule {}
