//exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');

exports.decorateConfig = (config) => {

  var confObj = Object.assign({}, config, {
    foregroundColor: '#eceff1',
    backgroundColor: `rgba(38,50,56, ${ config.backgroundOpacity || '1' })`,
    borderColor: '#37474F',
    cursorColor: '#FFCC00',
    colors: {
      black: '#000000',
      red: '#D62341',
      green: '#9ECE58',
      yellow: '#FAED70',
      blue: '#396FE2',
      magenta: '#BB80B3',
      cyan: '#2DDAFD',
      white: '#d0d0d0',
      lightBlack: '#546E7A',
      lightRed: '#FF5370',
      lightGreen: '#C3E88D',
      lightYellow: '#FFCB6B',
      lightBlue: '#82AAFF',
      lightMagenta: '#C792EA',
      lightCyan: '#89DDFF',
      lightWhite: '#ffffff'
    },
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

      .hyper_main {
        border: none;
      }

      .tabs_borderShim {
        display: none;
      }

      .tab_tab {
        border: none;
        color: rgba(255, 255, 255, 0.2);
        font-weight: bold;
      }

      .tab_tab::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background-color: ${config.accentColor || '#80CBC4'};
        transform: scaleX(0);
        transition: none;
      }

      .tab_tab.tab_active {
        color: #FFF;
      }

      .tab_tab.tab_active::before {
        transform: scaleX(1);
        transition: all 300ms cubic-bezier(0.0, 0.0, 0.2, 1)
      }

      .tab_textInner {
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 100%;
        padding: 0px 24px 0 8px;
      }
    `
  });

  exports.onWindow = (browserWindow) => {
    if (confObj.enableVibrance == true) {
      browserWindow.setVibrancy('dark');
    }
  };

  return confObj;

}
