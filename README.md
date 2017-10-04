# stylelint-config-fandom
Stylelint ruleset for Fandom

## Usage

#### package.json
```json
{
  "scripts": {
    "lint.css": "stylelint \"styles/**/*.{css,scss}\"",
    "lint.css.fix": "stylelint \"styles/**/*.{css,scss}\" --fix",
  },
  "devDependencies": {
    "stylelint": "^8.1.1",
    "stylelint-config-fandom": "git://github.com/Wikia/stylelint-config-fandom.git#0.0.1",
    "stylelint-order": "^0.7.0",
    "stylelint-scss": "^2.1.0",
  }
}
```

#### .stylelintrc
```json
{
  "extends": "stylelint-config-fandom",
}
```

### Usage
```
> npm run lint.css
```
OR
```
> yarn lint.css
```

