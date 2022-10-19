import CreateNewNoteHandler from './CreateNewNote/handler';
import DeleteNoteByIDHandler from './DeleteNoteByID/handler';
import GetAllNotesHandler from './GetAllNotes/handler';
import GetNoteByIDHandler from './GetNoteByID/handler';
import GetNoteByTitleHandler from './GetNoteByTitle/handler';

export const handlers = [
  CreateNewNoteHandler,
  GetAllNotesHandler,
  GetNoteByIDHandler,
  GetNoteByTitleHandler,
  DeleteNoteByIDHandler,
];
