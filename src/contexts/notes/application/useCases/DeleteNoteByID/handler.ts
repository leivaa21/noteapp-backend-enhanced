import { Injectable } from '@nestjs/common';
import InMemoNoteRepository from 'src/contexts/notes/infrastructure/persitance/inMemo/notesRepository';
import DeleteNoteByIDCommand from './command';

@Injectable()
class DeleteNoteByIDHandler {
  constructor(private readonly repository: InMemoNoteRepository) {}
  handle(command: DeleteNoteByIDCommand) {
    const { id } = command;
    return this.repository.erase(id);
  }
}

export default DeleteNoteByIDHandler;
