# Material Theme for [Hyper](https://hyper.is) <img width="32" alt="Hyper Material Theme" src="https://cloud.githubusercontent.com/assets/10454741/21241774/9172ddb6-c311-11e6-91ee-e4225ab9560a.gif">

<img width="480" alt="Hyper Material Theme" src="https://cloud.githubusercontent.com/assets/10454741/21241743/728f96c8-c311-11e6-9612-83d54f3a40bb.gif">

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
This theme provide 4 additional settings that you can add in your `~/.hyper.js` file.

```js
// Set the theme variant,
// OPTIONS: 'Darker', 'Palenight', ''
theme: '',
// Set the rgba() app background opacity, useful when enableVibrance is true
// OPTIONS: From 0.1 to 1
backgroundOpacity: '1',
// Set the accent color for the current active tab
accentColor: '#64FFDA',
// Mac Only. Enable the dark vibrance and blurred background
// NOTE: The backgroundOpacity should be between 0.1 and 0.9 to see the effect.
enableVibrance: false,
```
