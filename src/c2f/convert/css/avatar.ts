import $ from 'jquery'
const setStyle = (css) => {
  const data: { key: string; val: string }[] = [];
  let c = Object.entries(css)
    .map(([property, val]) => {
      let value = `${val}`
      if (property === 'background-color') {
        const rgb = hexToRgb(value)
        data.push({ key: 'background-color', val: rgb })
      } else
        if (property === 'border') {
          const values = value.split(' ');
          // values.forEach(val =>)
          const width = values[0];
          const style = values[1];
          const color = values[2];

          data.push({ key: 'border-width', val: width });
          data.push({ key: 'border-style', val: style });
          data.push({ key: 'border-color', val: color });

        } else
          if (property === 'border-radius') {
            const values = value.split(' ');
            if (values.length === 1) {
              // return [{ key: 'border-radius', val: value }];

              data.push({ key: 'border-top-left-radius', val: values[0] });
              data.push({ key: 'border-bottom-right-radius', val: values[0] });
              data.push({ key: 'border-top-right-radius', val: values[0] });
              data.push({ key: 'border-bottom-left-radius', val: values[0] });

            }
            if (values.length === 2) {
              return [
                { key: 'border-top-left-radius', val: values[0] },
                { key: 'border-bottom-right-radius', val: values[0] },
                { key: 'border-top-right-radius', val: values[1] },
                { key: 'border-bottom-left-radius', val: values[1] },
              ];
            }
            if (values.length === 3) {
              return [
                { key: 'border-top-left-radius', val: values[0] },
                { key: 'border-top-right-radius', val: values[1] },
                { key: 'border-bottom-left-radius', val: values[1] },
                { key: 'border-bottom-right-radius', val: values[2] },
              ];
            }
            if (values.length === 4) {
              return [
                { key: 'border-top-left-radius', val: values[0] },
                { key: 'border-top-right-radius', val: values[1] },
                { key: 'border-bottom-right-radius', val: values[2] },
                { key: 'border-bottom-left-radius', val: values[3] },
              ];
            }
          } else
            if (property === 'padding') {
              const values = value.split(' ');
              if (values.length === 1) {
                return [
                  { key: 'padding-top', val: values[0] },
                  { key: 'padding-right', val: values[0] },
                  { key: 'padding-bottom', val: values[0] },
                  { key: 'padding-left', val: values[0] },
                ];
              } else if (values.length === 2) {

                data.push({ key: 'padding-top', val: values[0] });
                data.push({ key: 'padding-right', val: values[1] });
                data.push({ key: 'padding-bottom', val: values[0] });
                data.push({ key: 'padding-left', val: values[1] });

              } else if (values.length === 3) {
                return [
                  { key: 'padding-top', val: values[0] },
                  { key: 'padding-right', val: values[1] },
                  { key: 'padding-bottom', val: values[2] },
                  { key: 'padding-left', val: values[1] },
                ];
              } else {
                return [
                  { key: 'padding-top', val: values[0] },
                  { key: 'padding-right', val: values[1] },
                  { key: 'padding-bottom', val: values[2] },
                  { key: 'padding-left', val: values[3] },
                ];
              }
            } else
              if (property === 'margin') {
                const values = value.split(' ');
                if (values.length === 1) {

                  data.push({ key: 'margin-top', val: values[0] });
                  data.push({ key: 'margin-right', val: values[0] });
                  data.push({ key: 'margin-bottom', val: values[0] });
                  data.push({ key: 'margin-left', val: values[0] });

                } else if (values.length === 2) {
                  return [
                    { key: 'margin-top', val: values[0] },
                    { key: 'margin-right', val: values[1] },
                    { key: 'margin-bottom', val: values[0] },
                    { key: 'margin-left', val: values[1] },
                  ];
                } else if (values.length === 3) {
                  return [
                    { key: 'margin-top', val: values[0] },
                    { key: 'margin-right', val: values[1] },
                    { key: 'margin-bottom', val: values[2] },
                    { key: 'margin-left', val: values[1] },
                  ];
                } else {
                  return [
                    { key: 'margin-top', val: values[0] },
                    { key: 'margin-right', val: values[1] },
                    { key: 'margin-bottom', val: values[2] },
                    { key: 'margin-left', val: values[3] },
                  ];
                }
              } else
                if (property === 'text-decoration') {
                  const values = value.split(' ');
                  if (values.length === 1) {
                    return [{ key: 'text-decoration-line', val: values[0] }];
                  } else if (values.length === 2) {
                    return [
                      { key: 'text-decoration-line', val: values[0] },
                      { key: 'text-decoration-style', val: values[1] },
                    ];
                  } else {

                    data.push({ key: 'text-decoration-line', val: values[0] });
                    data.push({ key: 'text-decoration-style', val: values[1] });
                    data.push({ key: 'text-decoration-color', val: values[2] });

                  }
                } else
                  if (property === 'font') {
                    // function parseFont(shorthand: string): { key: string; val: string }[] {

                    const values = value.split(' ');
                    const result: { key: string; val: string }[] = [];

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

                    data.push({ key: 'font-style', val: style });
                    data.push({ key: 'font-weight', val: weight });
                    data.push({ key: 'font-size', val: size });
                    data.push({ key: 'font-family', val: family.trim() });

                    return result;
                  } else {
                    return [{ key: property, val: value }]
                  }
    })
  console.log('[]=====>', data)
};
function hexToRgb(hex: string): string {
  // check if the input string is a valid hex color code
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    return hex
    throw new Error('Invalid hexadecimal color code');
  } else {
    // convert the hex color code to an RGB color code
    let c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    const rgb = `rgb(${parseInt(c[0] + c[1], 16)}, ${parseInt(c[2] + c[3], 16)}, ${parseInt(c[4] + c[5], 16)})`;
    return rgb;
  }
}
const usercss = {
  // 'background-color': 'rgb(243,243,243)',
  'width': '320px',
  'height': '240px',
  'border-width': '5px',
  'border-style': 'solid',
  'border-color': 'rgb(255, 0, 0)',
  'font-style': 'normal',
  'font- weight': '900',
  'font - size': '24px',
  'font-family': 'Georgia',
  'padding-top': '2px',
  'padding-right': '10px',
  'padding-bottom': '2px',
  'padding-left': '10px',
  'margin-top': '3px',
  'margin-right': '3px',
  'margin-bottom': '3px',
  'margin-left': '3px',
  'border-top-left-radius': '10px',
  'border-top-right-radius': '10px',
  'border-bottom-right-radius': '10px',
  'border-bottom-left-radius': '10px',
  'text-decoration-line': 'underline',
  'text-decoration-style': 'wavy',
  'text-decoration-color': 'rgb(255, 0, 0)'
};

const getStyle = key => {
  const style = Object.entries(usercss)
    .map(([property, value]) => {
      if (property === key) {
        return value
      }
    })
    .join('');
  return style
};
export { getStyle, setStyle };