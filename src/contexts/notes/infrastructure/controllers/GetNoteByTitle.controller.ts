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
import GetNoteByTitleHandler from '../../application/useCases/GetNoteByTitle/handler';
import GetNoteByTitleQuery from '../../application/useCases/GetNoteByTitle/query';

@ApiTags('Notes')
@Controller('/api/notes')
class GetNoteByTitleController {
  constructor(private readonly handler: GetNoteByTitleHandler) {}

  @Get('/t/:title')
  @ApiOperation({
    summary:
      'Get a certain note given his title / Case permisive and spaces are parsed from %20',
  })
  execute(
    @Param('title') title: string,
    @Request() req: request,
    @Response() res: response,
  ) {
    const titleFormated = title.replace('%20', ' ');
    const note = this.handler.handle(new GetNoteByTitleQuery(titleFormated));
    res.status(HttpStatus.OK).json({ note: note.json });
  }
}

export default GetNoteByTitleController;
