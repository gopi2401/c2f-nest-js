import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import * as rawbody from 'raw-body';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): Promise<any> {
    return
    // this.appService.getHello();
  }
  // @Post()
  // csstof(@Req() req,): Promise<any> {
  //   console.log(req)
  //   return req
  // }
  @Post()
  async index(@Body() data, @Req() req) {

    // we have to check req.readable because of raw-body issue #57
    // https://github.com/stream-utils/raw-body/issues/57
    if (req.readable) {
      // body is ignored by NestJS -> get raw body from request
      const raw = await rawbody(req);
      const text = raw.toString().trim();
      // console.log('body:', text);
      return await this.appService.getHello(text);


    } else {
      // body is parsed by NestJS
      console.log('data:', data);
    }

    // ...
  }
}
