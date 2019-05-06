import Raven from 'raven-js';

function init() {
  Raven.config('https://4ee1e13a772b40e28527e00f12f3d902@sentry.io/1453650', {
    release: 'myapp@1.3.0',
    enviroment: 'development-test'
  }).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log
};
