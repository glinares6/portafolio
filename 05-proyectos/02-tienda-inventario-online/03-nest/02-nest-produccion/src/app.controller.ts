import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { Cron } from '@nestjs/schedule';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // private readonly logger = new Logger(AppController.name);

  @Cron('* */2 * * * *')
  handleCron() {
    // this.logger.debug('Called when the current second is 2');
    fetch('https://nest-online-build.onrender.com/ping').then((response) =>
      response.json().then((data) => console.log(data)),
    );
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ping')
  getPing(@Res() res: Response) {
    return this.appService.getPing(res);
  }

  // @Get('expose')
  // getExpose() {
  //   return this.appService.handleCron();
  // }
}
