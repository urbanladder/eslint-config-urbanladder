# ESLint Config Urban Ladder
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]

[travis-image]: https://img.shields.io/travis/feross/eslint-config-standard/master.svg
[travis-url]: https://travis-ci.org/feross/eslint-config-standard
[npm-image]: https://img.shields.io/npm/v/eslint-config-standard.svg
[npm-url]: https://npmjs.org/package/eslint-config-standard
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-standard.svg
[downloads-url]: https://npmjs.org/package/eslint-config-standard

## Installing

####1. Install the package
```bash
npm install eslint-config-urbanladder
```

####2. Install peer dependencies
OSX / Linux users can simply run
```bash
(
  export PKG=eslint-config-urbanladder;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Windows users will need to manually install peer dependencies stated in this project's [package.json](https://github.com/urbanladder/eslint-config-urbanladder/blob/master/package.json#L30)

## Usage

To use the JavaScript style config, add this to your .eslintrc file:

```
{
  "extends": "urbanladder"
}
```

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.
