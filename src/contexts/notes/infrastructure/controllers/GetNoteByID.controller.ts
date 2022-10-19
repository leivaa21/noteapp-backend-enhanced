import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Request,
  Response,
} from '@nestjs/common';
import { Request as request, Response as response } from 'express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import GetNoteByIDQuery from '../../application/useCases/GetNoteByID/query';
import GetNoteByIDHandler from '../../application/useCases/GetNoteByID/handler';

@ApiTags('Notes')
@Controller('/api/notes')
class GetNoteByIDController {
  constructor(private readonly handler: GetNoteByIDHandler) {}

  @Get('/:id')
  @ApiOperation({
    summary: 'Get a certain note given his id',
  })
  execute(
    @Param('id') id: string,
    @Request() req: request,
    @Response() res: response,
  ) {
    const note = this.handler.handle(new GetNoteByIDQuery(id));
    res.status(HttpStatus.OK).json({ note: note.json });
  }
}

export default GetNoteByIDController;
