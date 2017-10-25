// Require OS Home environment
// Require hyper.js configuration from user home

// Check the enableVibrance setting and update background color


exports.decorateConfig = config => {

  const ThemeConfig = config.MaterialTheme || {};
  let ThemeBackground;

  // Set vibrancy
  exports.onWindow = (browserWindow) => {
    browserWindow.setVibrancy(ThemeConfig.hasOwnProperty('vibrancy') ? ThemeConfig.vibrancy : 'dark');
  };

  if (ThemeConfig.theme && ThemeConfig.theme.toLowerCase() == 'Palenight'.toLowerCase()) {
    ThemeBackground = `rgba(41, 45, 62, ${ThemeConfig.backgroundOpacity || '1'})`;
  }
  else if (ThemeConfig.theme && ThemeConfig.theme.toLowerCase() == 'Darker'.toLowerCase()) {
    ThemeBackground = `rgba(33, 33, 33, ${ThemeConfig.backgroundOpacity || '1'})`;
  }
  else {
    ThemeBackground = `rgba(38, 50, 56, ${ThemeConfig.backgroundOpacity || '1'})`;
  }

  config.backgroundColor = ThemeBackground || config.backgroundColor;
  config.foregroundColor = `${config.foregroundColor || '#ECEFF1'}`;
  config.borderColor = '#37474F';
  config.cursorColor = `${config.cursorColor || '#FFCC00'}`;
  config.padding = `${config.padding || '24px 24px'}`;

  return Object.assign({}, config, {
    colors: {
      black: '#000000',
      red: '#E54B4B',
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
    },
    termCSS: `
      ${config.termCSS || ''}

      x-screen a {
        text-decoration: underline !important;
        color: ${ThemeConfig.accentColor || '#80CBC4'} !important;
      }

      ::selection {
        background: rgba(255, 255, 255, 0.15);
      }

      *::-webkit-scrollbar {
        width: 4px;
        height: 4px;
        background-color: transparent;
      }

      *::-webkit-scrollbar-track {
        background-color: transparent;
      }

      *::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
      }

      *::-webkit-scrollbar-thumb:window-inactive {
        background: transparent;
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
        background-color: ${ThemeConfig.accentColor || '#80CBC4'};
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
