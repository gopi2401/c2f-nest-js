const toCamel = val => {
  let re = /-(\w)/g;
  return val.replace(re, function ($0, $1) {
    return $1.toUpperCase();
  });
  // // Example
  // const input = "foo-bar-baz";
  // const output = input.replace(/-(\w)/g, (_, letter) => letter.toUpperCase());
  // console.log(output); // "fooBarBaz"
};

export default toCamel;
