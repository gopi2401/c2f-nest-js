import postcss from "postcss";
import Decls from "./decls";
import splitCssAttr from "./split-cssattr";

export default function parseCssDecls(root) {
  if (!root) return null;

  return new Promise(function (resolve, reject) {
    const decls = new Decls();
    // console.log('Input and values get(parseCssDecls)==>', decls)
    root.walkDecls((decl: { value: string; prop: any; }) => {
      console.log('decl.value==>', decl.value, typeof decl.value)
      // console.log('postcss.list.space==>', postcss.list.space)
      const list = postcss.list.space(decl.value);
      console.log('parseCssDecls list==>', list, typeof list)
      console.log('Decls==>', decls)
      decls.add({
        key: decl.prop,
        val: decl.value,
        data: decl,
        valueList: list
      });
      console.log('decls.add==>', decls)
    });

    console.log('l++>>>', decls)
    setTimeout((decls) => {
      decls = splitCssAttr(decls);
      // console.log('list to add', decls)
      resolve(decls)
    }, 80, decls);

  });

};


