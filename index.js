// Read the options
const CONFIG = require(process.env.HOME + `/.hyper.js`).config;
const colors = require('./colors.js').colors;
const THEME_CONFIG = CONFIG['MaterialTheme'] || {};

// Defaults
const DEFAULT_VIBRANCY = 'dark';

// Current options
const VIBRANCY = THEME_CONFIG.hasOwnProperty('vibrancy') ? THEME_CONFIG.vibrancy : DEFAULT_VIBRANCY;


exports.decorateBrowserOptions = config => {
  config.vibrancy = VIBRANCY;
  return config;
};

exports.decorateConfig = config => {

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
  config.foregroundColor = '#ECEFF1';
  config.borderColor = '#37474F';
  config.cursorColor = `${config.cursorColor || '#FFCC00'}`;
  config.padding = '24px 24px';
  return Object.assign({}, config, {
    colors,
    termCSS: `
      ${config.termCSS || ''}

      x-screen a {
        text-decoration: underline !important;
        color: ${colors.lightCyan} !important;
      }

      ::selection {
        background: rgba(255, 255, 255, 0.15);
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

      .splitpane_divider {
        background-color: rgba(0, 0, 0, 0.2) !important;
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

exports.onWindow = browserWindow => {
  return browserWindow;
};