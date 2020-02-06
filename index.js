var request = require('request');

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const TARGET_GROUP = "1247604625399791";

var graphapi = request.defaults({
  baseUrl: 'https://graph.facebook.com',
  auth: {
    'bearer': ACCESS_TOKEN
  }
});


function run() {
  graphapi({
    method: 'POST',
    url: '/' + TARGET_GROUP + '/feed',
    qs: {
      'message': "teste new relic",
      'link': "https://www.newrelic.com"
    }
  }, function (error, response, body) {
    if (error) {
      console.error(error);
    } else {
      console.log(response);
      var post_id = JSON.parse(body).id;
      console.log('Published ' + post_id);
    }
  });
}

run();