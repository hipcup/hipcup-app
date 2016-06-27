module.exports = (function(env) {
  var config = {};
  if(env === 'local') {
    config.ip = 'http://127.0.0.1:5000';
  } else if (env === 'production') {
    config.ip = 'https://hipcup-app.herokuapp.com';
  }
  return config;
}('production'));
