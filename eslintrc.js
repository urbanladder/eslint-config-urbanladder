module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb'],
  plugins: ['css-modules', 'compat', 'jsdoc', 'unicorn', 'sort-class-members'],
  rules: {
    // Compat
    'compat/compat': ['error'],

    // CSS Modules

    // Disabling rule as it does not play nicely
    // with the pattern of multiple components
    // importing single css file
    //'css-modules/no-unused-class': ['error'],

    'css-modules/no-undef-class': ['error'],

    // JsDoc
    'jsdoc/check-param-names': ['error'],
    'jsdoc/check-tag-names': ['error'],
    'jsdoc/check-types': ['error'],
    'jsdoc/newline-after-description': ['error'],
    'jsdoc/require-hyphen-before-param-description': ['error'],

    // Disabling rules from airbnb config
    'class-methods-use-this': ['off'],
    'global-require': ['off'],
    'no-plusplus': ['off'],
    'no-underscore-dangle': ['off'],

    // Enabling / Editing rules
    // disabled in airbnb config
    'func-names': ['error', 'as-needed'],
    'max-depth': ['error', 4],
    'max-len': [
      'error',
      {
        code: 80,
        comments: 65,
        ignoreStrings: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'max-params': ['error', 3],
    'max-statements-per-line': ['error', { 'max': 1 }],
    'max-statements': ['error', 12],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-console': ['error', { allow: ['error'] }],
    'no-negated-condition': ['error'],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-return-assign': ['error', 'except-parens'],
    'operator-linebreak': ['error', 'after'],
    'prefer-destructuring': ['error', {
      'array': false,
      'object': true,
    }, {
      'enforceForRenamedProperties': false,
    }],
    'radix': ['error', 'as-needed'],
    semi: ['error', 'never'],

    // Accessibility
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/label-has-for': ['error', { 'allowChildren': true }],

    // React specific

    // Disabling rules
    'react/sort-comp': ['off'],
    'react/require-default-props': ['off'],
    'react/no-unescaped-entities': ['off'],
    'react/no-did-mount-set-state': ['off'],
    'react/jsx-indent': ['off'], // Taken care by eslint `indent` rule

    // Enabling rules
    'react/jsx-key': ['error'],
    'react/jsx-handler-names': ['error', {
      'eventHandlerPrefix': 'handle',
      'eventHandlerPropPrefix': 'on',
    }],

    //
    'react/forbid-prop-types': ['error', { forbid: ['any', 'array'] }],
    'react/jsx-curly-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],

    // Sort class members
    'sort-class-members/sort-class-members': ['error', {
      'order': [
        '[static-properties]',
        '[preLifecycle]',
        'constructor',
        '[lifecycle]',
        '[static-methods]',
        '[conventional-private-methods]',
        '[getters]',
        '[getMethods]',
        '[accessor-pairs]',
        '[everything-else]',
        '[eventHandlers]',
        '[render]',
      ],
      'groups': {
        preLifecycle: [
          { name: 'displayName', type: 'property' },
          { name: 'propTypes', type: 'property' },
          { name: 'contextTypes', type: 'property' },
          { name: 'childContextTypes', type: 'property' },
          { name: 'defaultProps', type: 'property' },
        ],
        lifecycle: [
          { name: 'getDefaultProps', type: 'method' },
          { name: 'getInitialState', type: 'method' },
          { name: 'state', type: 'property' },
          { name: 'getChildContext', type: 'method' },
          { name: 'componentWillMount', type: 'method' },
          { name: 'componentDidMount', type: 'method' },
          { name: 'componentWillReceiveProps', type: 'method' },
          { name: 'shouldComponentUpdate', type: 'method' },
          { name: 'componentWillUpdate', type: 'method' },
          { name: 'componentDidUpdate', type: 'method' },
          { name: 'componentWillUnmount', type: 'method' },
        ],
        getMethods: [
          { name: '/get.+/' },
        ],
        eventHandlers: [
          { name: '/on.+/' },
          { name: '/handle.+/' },
        ],
        render: [{ name: 'render', type: 'method' }],
      },
      'accessorPairPositioning': 'getThenSet',
    }],

    // Unicorn
    'unicorn/throw-new-error': ['error'],
    'unicorn/no-abusive-eslint-disable': ['error'],
    'unicorn/number-literal-case': ['error'],
    'unicorn/escape-case': ['error'],
    'unicorn/no-array-instanceof': ['error'],
    'unicorn/no-hex-escape': ['error'],
    'unicorn/prefer-starts-ends-with': ['error'],
    'unicorn/custom-error-definition': ['error'],
    'unicorn/prefer-type-error': ['error'],
    'unicorn/regex-shorthand': ['error'],
    'unicorn/prefer-spread': ['error'],
    'unicorn/error-message': ['error'],
    'unicorn/no-unsafe-regex': ['error'],
    'unicorn/prefer-add-event-listener': ['error'],
  },
}
