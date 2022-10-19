class DuplicatedNoteException extends Error {
  constructor(id: string) {
    super(`Can't persist note with id: "${id}" - Duplicated`);
  }
}
export default DuplicatedNoteException;
