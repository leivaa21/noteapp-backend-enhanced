import {
  Controller,
  HttpStatus,
  Post,
  Request,
  Response,
} from '@nestjs/common';
import { Request as request, Response as response } from 'express';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import CreateNewNoteCommand from '../../application/useCases/CreateNewNote/command';
import CreateNewNoteHandler from '../../application/useCases/CreateNewNote/handler';

@ApiTags('Notes')
@Controller('/api/notes')
class CreateNewNoteController {
  constructor(private readonly handler: CreateNewNoteHandler) {}

  @Post('/')
  @ApiOperation({
    summary: 'Create a new note given all the params',
  })
  @ApiConsumes('application/json')
  @ApiBody({
    type: CreateNewNoteCommand,
  })
  execute(@Request() req: request, @Response() res: response) {
    const { title, content } = req.body;
    if (title === undefined || content === undefined) {
      throw new Error('Missing Parameters');
    }
    try {
      this.handler.handle(new CreateNewNoteCommand(title, content));
    } catch (e) {
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ status: 'BAD REQUEST', message: e.message });
    }
    res.status(HttpStatus.CREATED).json({ message: 'ok!' });
  }
}

export default CreateNewNoteController;
