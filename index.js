module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-scss",
    "stylelint-order"
  ],
  "rules": {
    "indentation": "tab",
    "number-leading-zero": "never",
    "color-no-invalid-hex": true,
    "color-hex-length": "short",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-name-case": ["lower"],
    "unit-case": ["lower"],
    "property-case": ["lower"],
    "property-no-unknown": true,
    "selector-pseudo-class-case": ["lower"],
    "selector-pseudo-element-case": ["lower"],
    "selector-type-case": ["lower"],
    "media-feature-name-case": ["lower"],
    "media-feature-name-no-unknown": true,
    "at-rule-empty-line-before": ["always", {
      except: ["after-same-name", "first-nested"],
      ignore: ["after-comment"],
      ignoreAtRules: ["media", "else"]
    }],
    "at-rule-no-unknown": [true, {
      ignoreAtRules: ["extend", "include", "mixin", "for", "if", "else", "function", "return", "content"]
    }],
    "order/properties-alphabetical-order": true,
    "order/order": [
      "custom-properties",
      "dollar-variables",
      {
        "type": "at-rule",
        "name": "extend",
      },
      {
        "type": "at-rule",
        "name": "include",
      },
      "declarations"
    ]
  }
};
