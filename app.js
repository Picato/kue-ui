var kue = require('kue');
var express = require('express');
var kueUiExpress = require('kue-ui-express');
var app = express();

kue.createQueue(
{
  redis: {
    port: 6379,
    host: '192.168.0.61'
    //host: 'eu4-server-wm-redis'
  }
}
);

kueUiExpress(app, '/kue/', '/kue-api/');

// Mount kue JSON api
app.use('/kue-api/', kue.app);

app.listen(3000);
