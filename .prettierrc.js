const webteamConfig = require('@webteam/eslint-config-prettier/prettier.config');

module.exports = {
  ...webteamConfig,
  trailingComma: 'none',
  arrowParens: 'avoid',
  endOfLine: 'auto'
};
