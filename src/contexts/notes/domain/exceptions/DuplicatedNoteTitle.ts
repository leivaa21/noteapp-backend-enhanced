class DuplicatedNoteTitleException extends Error {
  constructor(title: string) {
    super(`Can't persist note with title: "${title}" - title is duplicated`);
  }
}
export default DuplicatedNoteTitleException;
