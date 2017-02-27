# ESLint Config Urban Ladder
[![travis][travis-image]][travis-url]

[travis-image]: https://img.shields.io/travis/urbanladder/eslint-config-urbanladder/master.svg
[travis-url]: https://travis-ci.org/urbanladder/eslint-config-urbanladder
[![npm (scoped)](https://img.shields.io/npm/v/mobx-promise.svg)](https://www.npmjs.com/package/eslint-config-urbanladder)


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
