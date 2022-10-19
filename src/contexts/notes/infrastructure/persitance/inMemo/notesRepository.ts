import { Injectable } from '@nestjs/common';
import Note from 'src/contexts/notes/domain/entities/note';
import DuplicatedNoteException from 'src/contexts/notes/domain/exceptions/DuplicatedNote';
import DuplicatedNoteTitleException from 'src/contexts/notes/domain/exceptions/DuplicatedNoteTitle';
import NoteNotFoundException from 'src/contexts/notes/domain/exceptions/NoteNotFound';
import {
  NoteCriteria,
  NoteCriteriaByID,
  NoteCriteriaByTitle,
} from 'src/contexts/notes/domain/persistance/note.criteria';
import NoteRepository from 'src/contexts/notes/domain/persistance/note.repository';

@Injectable()
class InMemoNoteRepository implements NoteRepository {
  static persistedNotes = new Array<Note>();

  persistOne(note: Note): void | Promise<void> {
    this.preventDuplicate(note);
    InMemoNoteRepository.persistedNotes.push(note);
  }
  get(criteria: NoteCriteria): Note {
    switch (criteria._TYPE.filter) {
      case 'BY_ID':
        const { id } = criteria as NoteCriteriaByID;
        return this.getByID(id);
      case 'BY_TITLE':
        const { title } = criteria as NoteCriteriaByTitle;
        return this.getByTitle(title);
      default:
        throw new Error('Method not implemented');
    }
  }
  getAll(): Array<Note> {
    return InMemoNoteRepository.persistedNotes;
  }
  erase(id: string): void | Promise<void> {
    const index = InMemoNoteRepository.persistedNotes.findIndex(
      (persistedNote) => persistedNote.id === id,
    );
    if (index === -1) {
      return;
    }
    InMemoNoteRepository.persistedNotes.splice(index);
  }

  private getByID(id: string) {
    const index = InMemoNoteRepository.persistedNotes.findIndex(
      (note) => note.id === id,
    );
    if (index === -1) {
      throw new NoteNotFoundException({ id });
    }
    return InMemoNoteRepository.persistedNotes[index];
  }
  private getByTitle(title: string) {
    const index = InMemoNoteRepository.persistedNotes.findIndex(
      (note) => note.title.toLowerCase() === title.toLowerCase(),
    );
    if (index === -1) {
      throw new NoteNotFoundException({ title });
    }
    return InMemoNoteRepository.persistedNotes[index];
  }

  private preventDuplicate(note: Note) {
    if (
      InMemoNoteRepository.persistedNotes.findIndex(
        (persistedNote) => persistedNote.id === note.id,
      ) !== -1
    ) {
      throw new DuplicatedNoteException(note.id);
    }
    if (
      InMemoNoteRepository.persistedNotes.findIndex(
        (persistedNote) => persistedNote.title === note.title,
      ) !== -1
    ) {
      throw new DuplicatedNoteTitleException(note.title);
    }
  }
}

export default InMemoNoteRepository;
