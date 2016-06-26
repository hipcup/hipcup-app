var app = require('./server/server.js');
var port = app.get('port');

app.listen(port, function() {
  console.log("Running on port ", port);
});
