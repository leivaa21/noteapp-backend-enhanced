import { Controller, Delete, Param, Request, Response } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request as request, Response as response } from 'express';
import DeleteNoteByIDCommand from '../../application/useCases/DeleteNoteByID/command';
import DeleteNoteByIDHandler from '../../application/useCases/DeleteNoteByID/handler';

@ApiTags('Notes')
@Controller('/api/notes')
class DeleteNoteByIDController {
  constructor(private readonly handler: DeleteNoteByIDHandler) {}

  @Delete('/:id')
  @ApiOperation({
    summary: 'Deletes a note with a certain id',
  })
  execute(
    @Param('id') id: string,
    @Request() req: request,
    @Response() res: response,
  ) {
    this.handler.handle(new DeleteNoteByIDCommand(id));
    res.status(200).json({ message: 'Note was deleted' });
  }
}

export default DeleteNoteByIDController;
