exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');
exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#eceff1',
    backgroundColor: '#263238',
    borderColor: '#37474F',
    cursorColor: '#FFCC00',
    colors: [
      '#000000',
      '#D62341',
      '#9ECE58',
      '#FAED70',
      '#396FE2',
      '#BB80B3',
      '#2DDAFD',
      '#d0d0d0',
      '#546E7A',
      '#FF5370',
      '#C3E88D',
      '#FFCB6B',
      '#82AAFF',
      '#C792EA',
      '#89DDFF',
      '#ffffff'
    ],
    termCSS: `
      ${config.termCSS || ''}
      @keyframes blink-animation {
        to {
          background-color: transparent;
        }
      }
      .cursor-node[focus=true]:not([moving]) {
        animation: blink-animation .777s ease-in-out infinite;
        box-sizing: content-box !important;
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
    `
  })
}
