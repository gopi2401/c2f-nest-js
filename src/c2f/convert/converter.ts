import postcss from 'postcss';
import parseCssDecls from './css/parse';
import { parseFlutter } from './flutter/parse';
export async function convert2Flutter(css) {
    try {
        const ast = await postcss([
            require("postcss-transform-shortcut")({})
            // require("postcss-short-border-radius")()
        ]).process(css);
        console.log("!", ast);
        console.log("!!", ast.root);
        console.log("!!!", ast.root.walkDecls); 
        const decls = await parseCssDecls(ast.root);
        console.log('!!!!!', JSON.stringify(decls))
        const flutterStyle = parseFlutter(decls);

        if (flutterStyle !== "") console.log("Has been converted successfully!");

        return flutterStyle;
    } catch (err) {
        console.log(err)

        return "";
    }
};
    // async getHello(): Promise<any> { }
    // convert2Flutter = async css => {
    //     // try {
    //     const ast = await postcss([
    //         require("postcss-transform-shortcut")({})
    //         // require("postcss-short-border-radius")()
    //     ]).process(css);

    //     const decls = await parseCssDecls(ast.root);
    //     const flutterStyle = parseFlutter(decls);

    //     if (flutterStyle !== "") Message.success("Has been converted successfully!");

    //     return flutterStyle;
    // } catch (err) {
    //     const msg = dumpLogError(err);
    //     Message.error(msg);

    //     return "";
    // }
    // };



