import { Injectable } from '@nestjs/common';
import Note from 'src/contexts/notes/domain/entities/note';
import InMemoNoteRepository from 'src/contexts/notes/infrastructure/persitance/inMemo/notesRepository';
import CreateNewNoteCommand from './command';

@Injectable()
class CreateNewNoteHandler {
  constructor(private readonly repository: InMemoNoteRepository) {}
  handle(command: CreateNewNoteCommand) {
    const { title, content } = command;
    const note = Note.Create({ title, content });
    this.repository.persistOne(note);
  }
}

export default CreateNewNoteHandler;
