import { NoteCriteria } from './note.criteria';
import Note from '../entities/note';

interface NoteRepository {
  persistOne(note: Note): void | Promise<void>;
  get(criteria: NoteCriteria): Note | undefined | Promise<Note | undefined>;
  getAll(): Array<Note> | Promise<Array<Note>>;
  erase(id: string): void | Promise<void>;
}

export default NoteRepository;
