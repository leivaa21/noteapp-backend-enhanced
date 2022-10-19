import { Module } from '@nestjs/common';
import { controllers } from './controllers';
import { handlers } from '../application/useCases';
import InMemoNoteRepository from './persitance/inMemo/notesRepository';

@Module({
  imports: [],
  controllers: [...controllers],
  providers: [...handlers, InMemoNoteRepository],
})
export class NotesModule {}
