// import clone from "lodash/clone";
// import { clone } from "lodash";
class Detailcss {
  detailcss: any[];
  constructor() {
    this.detailcss = [];
  }

  add({ key, val }) {
    this.detailcss.push({ key, val });
  }

  // isNull() {
  //   return this.detailcss.length === 0;
  // }
  forEach(func) {
    this.detailcss.forEach((decl, index) => func(decl, index));
  }
  // merge(decls) {
  //   for (let key in decls) {
  //     this.add({
  //       key,
  //       val: decls[key]
  //     });
  //   }
  // }
  // remove(key) {
  //   for (let i = this.detailcss.length - 1; i >= 0; i--) {
  //     if (this.detailcss[i]["key"] === key) {
  //       this.detailcss.splice(i, 1);
  //     }
  //   }
  // }
  getVal(key) {
    let val = null;
    this.detailcss.forEach(decl => {
      if (decl.key === key) val = decl.val;
    });
    return val;
  }
  // clone() {
  //   const cloneDetailcss = new Detailcss();
  //   cloneDetailcss.detailcss = clone(this.detailcss);
  //   return cloneDetailcss;
  // }
}
export default Detailcss;
