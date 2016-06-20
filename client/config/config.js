module.exports = (function(env) {
  var config = {};
  if(env === 'local') {
    config.ip = 'http://127.0.0.1:3468';
  } else if (env === 'production') {
    config.ip = 'http://hipcup-app.herokuapp.com';
  }
  return config;
}('local'));
