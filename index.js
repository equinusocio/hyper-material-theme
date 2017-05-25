// Read the options
const CONFIG = require(process.env.HOME + `/.hyper.js`).config;
const THEME_CONFIG = CONFIG['MaterialTheme'] || {};

// Defaults
const DEFAULT_VIBRANCY = 'dark';

// Current options
const VIBRANCY = THEME_CONFIG.hasOwnProperty('vibrancy') ? THEME_CONFIG.vibrancy : DEFAULT_VIBRANCY;

const colors = {
  black: '#000000',
  red: '#D62341',
  green: '#9ECE58',
  yellow: '#FAED70',
  blue: '#396FE2',
  magenta: '#BB80B3',
  cyan: '#2DDAFD',
  white: '#d0d0d0',
  lightBlack: 'rgba(255, 255, 255, 0.2)',
  lightRed: '#FF5370',
  lightGreen: '#C3E88D',
  lightYellow: '#FFCB6B',
  lightBlue: '#82AAFF',
  lightMagenta: '#C792EA',
  lightCyan: '#89DDFF',
  lightWhite: '#ffffff'
};

module.exports.decorateBrowserOptions = config => {
  config.vibrancy = VIBRANCY;
  return config;
};

module.exports.decorateConfig = config => {

  var BACKGORUND_COLOR;

  if (THEME_CONFIG.theme.toLowerCase() == 'Palenight'.toLowerCase()) {
    BACKGORUND_COLOR = `rgba(41, 45, 62, ${THEME_CONFIG.backgroundOpacity || '1'})`;
  }
  else if (THEME_CONFIG.theme.toLowerCase() == 'Darker'.toLowerCase()) {
    BACKGORUND_COLOR = `rgba(33, 33, 33, ${THEME_CONFIG.backgroundOpacity || '1'})`;
  }
  else {
    BACKGORUND_COLOR = `rgba(38, 50, 56, ${THEME_CONFIG.backgroundOpacity || '1'})`;
  }

  config.backgroundColor = BACKGORUND_COLOR;
  config.foregroundColor = '#eceff1';
  config.borderColor = '#37474F';
  config.cursorColor = `${config.cursorColor || '#FFCC00'}`;
  return Object.assign({}, config, {
    colors,
    termCSS: `
      ${config.termCSS || ''}
      x-screen a {
        text-decoration: underline !important;
        color: ${colors.lightCyan} !important;
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
      }

      .tab_tab::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background-color: ${THEME_CONFIG.accentColor || '#80CBC4'};
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
};

const enterFullscreen = () => {
  document.body.classList.add('fullscreen');
};

const leaveFullscreen = () => {
  document.body.classList.remove('fullscreen');
};

const focus = () => {
  document.body.classList.add('focus');
};

const blur = () => {
  document.body.classList.remove('focus');
};

module.exports.onWindow = browserWindow => {
  return browserWindow;
};