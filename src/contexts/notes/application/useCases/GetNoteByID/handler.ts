import { Injectable } from '@nestjs/common';
import { NoteCriteriaByID } from 'src/contexts/notes/domain/persistance/note.criteria';
import InMemoNoteRepository from 'src/contexts/notes/infrastructure/persitance/inMemo/notesRepository';
import GetNoteByIDQuery from './query';

@Injectable()
class GetNoteByIDHandler {
  constructor(private readonly repository: InMemoNoteRepository) {}
  handle(query: GetNoteByIDQuery) {
    const { id } = query;
    return this.repository.get(new NoteCriteriaByID(id));
  }
}

export default GetNoteByIDHandler;
