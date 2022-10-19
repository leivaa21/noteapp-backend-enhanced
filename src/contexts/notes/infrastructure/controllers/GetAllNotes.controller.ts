import { Controller, Get, HttpStatus, Request, Response } from '@nestjs/common';
import { Request as request, Response as response } from 'express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import GetAllNotesHandler from '../../application/useCases/GetAllNotes/handler';

@ApiTags('Notes')
@Controller('/api/notes')
class GetAllNotesController {
  constructor(private readonly handler: GetAllNotesHandler) {}

  @Get('/')
  @ApiOperation({
    summary: 'Get all the notes',
  })
  execute(@Request() req: request, @Response() res: response) {
    const notes = this.handler.handle();
    res.status(HttpStatus.OK).json({ notes: notes.map((note) => note.json) });
  }
}

export default GetAllNotesController;
