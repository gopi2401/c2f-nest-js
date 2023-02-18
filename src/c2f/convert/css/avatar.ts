import Detailcss from "./detailcss";
const detailcss = new Detailcss();
const setStyle = (css) => {
  Object.entries(css)
    .map(([property, val]) => {
      let value = `${val}`
      if (property === 'background-color') {
        const rgb = hexToRgb(value)
        detailcss.add({ key: 'background-color', val: rgb });
      } else
        if (property === 'border') {
          const values = value.split(' ');
          let width = '3px'
          let style = 'solid';
          let color = '#000000';
          values.forEach((value) => {
            if (value.endsWith('px')) {
              width = value;
            } else {
              ['dashed', 'dotted', 'double', 'groove', 'hidden', 'inherit', 'inset', 'outset', 'ridge', 'none'].forEach((val) => {
                if (val === value) {
                  style = value
                }
              })
            }

          });
          detailcss.add({ key: 'border-width', val: width });
          detailcss.add({ key: 'border-style', val: style });
          detailcss.add({ key: 'border-color', val: color });
        } else
          if (property === 'border-radius') {
            const values = value.split(' ');
            if (values.length === 1) {
              detailcss.add({ key: 'border-top-left-radius', val: values[0] });
              detailcss.add({ key: 'border-bottom-right-radius', val: values[0] });
              detailcss.add({ key: 'border-top-right-radius', val: values[0] });
              detailcss.add({ key: 'border-bottom-left-radius', val: values[0] });
            }
            if (values.length === 2) {
              detailcss.add({ key: 'border-top-left-radius', val: values[0] });
              detailcss.add({ key: 'border-bottom-right-radius', val: values[0] });
              detailcss.add({ key: 'border-top-right-radius', val: values[1] });
              detailcss.add({ key: 'border-bottom-left-radius', val: values[1] });
            }
            if (values.length === 3) {
              detailcss.add({ key: 'border-top-left-radius', val: values[0] });
              detailcss.add({ key: 'border-bottom-right-radius', val: values[1] });
              detailcss.add({ key: 'border-top-right-radius', val: values[1] });
              detailcss.add({ key: 'border-bottom-left-radius', val: values[2] });
            }
            if (values.length === 4) {
              detailcss.add({ key: 'border-top-left-radius', val: values[0] });
              detailcss.add({ key: 'border-bottom-right-radius', val: values[1] });
              detailcss.add({ key: 'border-top-right-radius', val: values[2] });
              detailcss.add({ key: 'border-bottom-left-radius', val: values[3] });
            }
          } else
            if (property === 'padding') {
              const values = value.split(' ');
              if (values.length === 1) {
                detailcss.add({ key: 'padding-top', val: values[0] });
                detailcss.add({ key: 'padding-right', val: values[0] });
                detailcss.add({ key: 'padding-bottom', val: values[0] });
                detailcss.add({ key: 'padding-left', val: values[0] });
              } else if (values.length === 2) {
                detailcss.add({ key: 'padding-top', val: values[0] });
                detailcss.add({ key: 'padding-right', val: values[1] });
                detailcss.add({ key: 'padding-bottom', val: values[0] });
                detailcss.add({ key: 'padding-left', val: values[1] });
              } else if (values.length === 3) {
                detailcss.add({ key: 'padding-top', val: values[0] });
                detailcss.add({ key: 'padding-right', val: values[1] });
                detailcss.add({ key: 'padding-bottom', val: values[2] });
                detailcss.add({ key: 'padding-left', val: values[1] });
              } else {
                detailcss.add({ key: 'padding-top', val: values[0] });
                detailcss.add({ key: 'padding-right', val: values[1] });
                detailcss.add({ key: 'padding-bottom', val: values[2] });
                detailcss.add({ key: 'padding-left', val: values[3] });
              }
            } else
              if (property === 'margin') {
                const values = value.split(' ');
                if (values.length === 1) {
                  detailcss.add({ key: 'margin-top', val: values[0] });
                  detailcss.add({ key: 'margin-right', val: values[0] });
                  detailcss.add({ key: 'margin-bottom', val: values[0] });
                  detailcss.add({ key: 'margin-left', val: values[0] });
                } else if (values.length === 2) {
                  detailcss.add({ key: 'margin-top', val: values[0] });
                  detailcss.add({ key: 'margin-right', val: values[1] });
                  detailcss.add({ key: 'margin-bottom', val: values[0] });
                  detailcss.add({ key: 'margin-left', val: values[1] });
                } else if (values.length === 3) {
                  detailcss.add({ key: 'margin-top', val: values[0] });
                  detailcss.add({ key: 'margin-right', val: values[1] });
                  detailcss.add({ key: 'margin-bottom', val: values[2] });
                  detailcss.add({ key: 'margin-left', val: values[1] });
                } else {
                  detailcss.add({ key: 'margin-top', val: values[0] });
                  detailcss.add({ key: 'margin-right', val: values[1] });
                  detailcss.add({ key: 'margin-bottom', val: values[2] });
                  detailcss.add({ key: 'margin-left', val: values[3] });
                }
              } else
                if (property === 'text-decoration') {
                  const values = value.split(' ');
                  if (values.length === 1) {
                    detailcss.add({ key: 'text-decoration-line', val: values[0] });
                  } else if (values.length === 2) {
                    detailcss.add({ key: 'text-decoration-line', val: values[0] });
                    detailcss.add({ key: 'text-decoration-style', val: values[1] });
                  } else {
                    detailcss.add({ key: 'text-decoration-line', val: values[0] });
                    detailcss.add({ key: 'text-decoration-style', val: values[1] });
                    detailcss.add({ key: 'text-decoration-color', val: values[2] });
                  }
                } else
                  if (property === 'font') {
                    const values = value.split(' ');
                    let style = 'normal';
                    let weight = 'normal';
                    let size = 'medium';
                    let family = '';
                    values.forEach((value) => {
                      if (/^\d+$/.test(value)) {
                        weight = value;
                      } else if (value.endsWith('px')) {
                        size = value;
                      } else if (value.match(/^[a-z]+$/i)) {
                        family += ` ${value}`;
                      } else {
                        switch (value) {
                          case 'normal':
                          case 'italic':
                          case 'oblique':
                            style = value;
                            break;
                          case 'bold':
                          case 'bolder':
                          case 'lighter':
                          case /^\d+$/.test(value) && value:
                            weight = value;
                            break;
                        }
                      }
                    });
                    detailcss.add({ key: 'font-style', val: style });
                    detailcss.add({ key: 'font-weight', val: weight });
                    detailcss.add({ key: 'font-size', val: size });
                    detailcss.add({ key: 'font-family', val: family.trim() });
                  } else {
                    detailcss.add({ key: property, val: value });
                  }
    })
};
// const colortorgb = (val) => {

// }
// let coors = '#e0e0e0'
// colortorgb(coors)
const hexToRgb = (hex: string): string => {
  // check if the input string is a valid hex color code
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    return hex
    throw new Error('Invalid hexadecimal color code');
  }
  // convert the hex color code to an RGB color code
  let c = hex.substring(1).split('');
  if (c.length === 3) {
    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
  }
  const rgb = `rgb(${parseInt(c[0] + c[1], 16)}, ${parseInt(c[2] + c[3], 16)}, ${parseInt(c[4] + c[5], 16)})`;
  return rgb;
}
const getStyle = key => {
  return detailcss.getVal(key)
};
export { getStyle, setStyle };