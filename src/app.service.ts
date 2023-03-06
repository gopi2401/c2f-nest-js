import { Injectable } from '@nestjs/common';
import postcss from 'postcss';
import { convert2Flutter } from './c2f/convert/converter';
import { getConvertedClasses } from './c2f/convert/tailwind/helpers';

@Injectable()
export class AppService {
  async getHello(text: string): Promise<any> {
    let cssVal = `
  background-color: #e0e0e0;
  width: 320px;
  height: 240px;
  border:5px solid red;
  font: 900 24px Georgia;
  padding: 2px 10px;
  margin: 3px;
  border-radius: 10px;
  text-decoration: underline wavy red;
      `
    let data = await convert2Flutter(text)
    // const ast = await postcss([
    //   require("postcss-transform-shortcut")({})
    //   // require("postcss-short-border-radius")()
    // ]).process(cssVal);
    // console.log(ast.css)
    return data
  }
  async get(input: string): Promise<any> {

    let data = getConvertedClasses(input)
    return data
  }
}
