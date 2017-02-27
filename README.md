# ESLint Config Urban Ladder
[![Travis](https://img.shields.io/travis/urbanladder/eslint-config-urbanladder.svg)]()
[![npm (scoped)](https://img.shields.io/npm/v/eslint-config-urbanladder.svg)](https://www.npmjs.com/package/eslint-config-urbanladder)
[![npm](https://img.shields.io/npm/l/eslint-config-urbanladder.svg)](https://www.npmjs.com/package/eslint-config-urbanladder)


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

## Uses
- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) 
- [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)
- [eslint-plugin-css-modules](https://github.com/atfzl/eslint-plugin-css-modules)
- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
- [eslint-plugin-sort-class-members](https://github.com/bryanrsmith/eslint-plugin-sort-class-members)

