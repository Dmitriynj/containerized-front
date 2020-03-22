const Development = require('./webpack.dev');
const Production = require('./webpack.prod');

module.exports = (env) => {
  let mode = env.mode;

  if (typeof process.env.npm_lifecycle_event !== 'undefined') {
    mode = process.env.npm_lifecycle_event;
  }

  switch (mode) {
    case 'prod':
      return Production(env);
    default:
      return Development(env);
  }
};
