module.exports = {
  "ecmaFeatures": {
    "modules": true,
    "jsx": true
  },
  "env": {
    "browser": true,
    "node": true
  },
  "parser": "babel-eslint",
  "plugins": [ "react" ],
  "rules": {
    "arrow-spacing": 2,
    "comma-dangle": [ 2, "always-multiline" ],
    "dot-notation": 2,
    "eqeqeq": 2,
    "linebreak-style": [ 2, "unix" ],
    "max-len": [ 2, 100 ],
    "no-else-return": 2,
    "no-undef": 2,
    "no-unreachable": 2,
    "no-unused-vars": 2,
    "no-useless-constructor": 2,
    "no-var": 2,
    "object-curly-spacing": [ 2, "always" ],
    "object-shorthand": 2,
    "prefer-arrow-callback": 2,
    "quotes": [ 2, "backtick" ],
    "semi": [ 2, "never" ],
    "space-in-parens": [ 2, "never" ],
    "strict": 0,
    "react/jsx-boolean-value": 2,
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-indent": [ 2, 2 ],
    "react/jsx-indent-props": [ 2, 2 ],
    "react/jsx-key": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-string-refs": 2,
    "react/no-unknown-property": 2,
    "react/no-unused-prop-types": 2,
    "react/prefer-stateless-function": 2,
    "react/self-closing-comp": 2,
    "react/react-in-jsx-scope": 2
  }
}
