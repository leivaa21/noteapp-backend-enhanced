import { Controller, Get, HttpStatus, Request, Response } from '@nestjs/common';
import { Request as request, Response as response } from 'express';
import { ApiOperation } from '@nestjs/swagger';

@Controller('/')
class AppController {
  @Get('/health')
  @ApiOperation({
    summary: 'Check health of api',
  })
  execute(@Request() req: request, @Response() res: response) {
    res.status(HttpStatus.OK).json({ message: 'OK' });
  }
}

export default AppController;
