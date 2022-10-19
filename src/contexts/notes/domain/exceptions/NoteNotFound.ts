class NoteNotFoundException extends Error {
  constructor({ id, title }: { id?: string; title?: string }) {
    if (id === undefined && title === undefined) {
      throw new Error(
        `Tried to initialize a NoteNotFoundException without id or title!`,
      );
    }
    super(
      `Note with ${id === undefined ? 'title' : 'id'}: "${
        id === undefined ? title : id
      }" was not found`,
    );
  }
}
export default NoteNotFoundException;
