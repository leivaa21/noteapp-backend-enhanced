import { Injectable } from '@nestjs/common';
import { NoteCriteriaByTitle } from 'src/contexts/notes/domain/persistance/note.criteria';
import InMemoNoteRepository from 'src/contexts/notes/infrastructure/persitance/inMemo/notesRepository';
import GetNoteByTitleQuery from './query';

@Injectable()
class GetNoteByTitleHandler {
  constructor(private readonly repository: InMemoNoteRepository) {}
  handle(query: GetNoteByTitleQuery) {
    const { title } = query;
    return this.repository.get(new NoteCriteriaByTitle(title));
  }
}

export default GetNoteByTitleHandler;
