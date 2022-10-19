import { ApiProperty } from '@nestjs/swagger';

class CreateNewNoteCommand {
  @ApiProperty()
  public readonly title: string;
  @ApiProperty()
  public readonly content: string;
  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}

export default CreateNewNoteCommand;
