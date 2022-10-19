import { Injectable } from '@nestjs/common';
import InMemoNoteRepository from 'src/contexts/notes/infrastructure/persitance/inMemo/notesRepository';

@Injectable()
class GetAllNotesHandler {
  constructor(private readonly repository: InMemoNoteRepository) {}
  handle() {
    return this.repository.getAll();
  }
}

export default GetAllNotesHandler;
