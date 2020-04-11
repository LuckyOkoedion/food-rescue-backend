import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  HttpException,
  HttpStatus,
  UseGuards,
  Req,
  Session,
} from '@nestjs/common';
import { AppService } from './app.service';

import { AuthService } from './auth/auth.service';


@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
