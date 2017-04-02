# Webpack Starter

This is a re-usable webpack configuration for any type of project.
Hopefully I can make this easy to configure and use as I learn it.

> **Status**: In Development, I may have overcomplicated myself, Don't use.

<!-- TOC -->

- [Webpack Starter](#webpack-starter)
- [Configure](#configure)
- [Install](#install)
    - [(Optional) Global Webpack](#optional-global-webpack)
    - [NPM Install](#npm-install)
- [Usage](#usage)

<!-- /TOC -->

# Configure

Before starting, I would recommend placing this in a subfolder to
keep your primary project less cluttered.

Edit `webpack.config.js`

# Install

Webpack is required, so you can install it locally or globally.
It will be included with this package if you run it locally:


## (Optional) Global Webpack
```
npm install webpack -g
```

## NPM Install
```
npm install
```

# Usage
You should be able to build with:
```
webpack
```

or locally with:
```
./node_modules/webpack/bin/webpack.js
```

---
&copy 2017 Jesse Boyer | [JREAM](http://jream.com)
