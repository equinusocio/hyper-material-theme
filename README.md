# Material Theme for [Hyper](https://hyper.is) <img width="32" alt="Hyper Material Theme" src="https://cloud.githubusercontent.com/assets/10454741/21241774/9172ddb6-c311-11e6-91ee-e4225ab9560a.gif">

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/09664dda15e84bdf8d041a18b9dc7c73)](https://www.codacy.com/app/astorino-design/hyper-material-theme?utm_source=github.com&utm_medium=referral&utm_content=equinusocio/hyper-material-theme&utm_campaign=badger)

<img width="480" alt="Hyper Material Theme" src="https://cloud.githubusercontent.com/assets/10454741/21243792/bbaf728e-c31a-11e6-972f-0995e77a32a0.png">

This is the official [Material Theme](https://github.com/equinusocio/material-theme) porting for [Hyper App](https://hyper.is).


## Installation

Just edit your `~/.hyper.js` file (Hyper > Preferences...) and add `hyper-material-theme` to `plugins: []` array.

```js
...
plugins: ['hyper-material-theme'],
...
```
**Then restart the app**


## Configuration
This theme provides 4 additional settings that you can add in your `~/.hyper.js` file **directly after** the colors object.

```js
    colors: {...
    },

    MaterialTheme: {
        // Set the theme variant,
        // OPTIONS: 'Darker', 'Palenight', ''
        theme: '',

        // Set the rgba() app background opacity, useful when enableVibrance is true
        // OPTIONS: From 0.1 to 1
        backgroundOpacity: '1',

        // Set the accent color for the current active tab
        accentColor: '#64FFDA',

        // Mac Only. Need restart. Enable the vibrance and blurred background
        // OPTIONS: 'dark', 'ultra-dark', 'bright'
        // NOTE: The backgroundOpacity should be between 0.1 and 0.9 to see the effect.
        vibrancy: 'dark'
    },

    // other configs..
```
