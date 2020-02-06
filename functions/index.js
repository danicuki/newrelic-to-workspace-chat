const functions = require('firebase-functions');
var request = require('request');

const ACCESS_TOKEN = functions.config().app.token;
const TARGET_GROUP = "1247604625399791";

var graphapi = request.defaults({
  baseUrl: 'https://graph.facebook.com',
  auth: {
    'bearer': ACCESS_TOKEN
  }
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.newrelicToWorkspaceChat = functions.https.onRequest((request, response) => {
  console.log(request.body);

  const message = request.body.incident_url
  sendMessage(request.body.details, request.body.incident_url, response);
});

function sendMessage(message, link, response) {
  graphapi({
    method: 'POST',
    url: '/' + TARGET_GROUP + '/feed',
    qs: {
      'message': message,
      'link': link
    }
  }, (error, faceResp, body) => {
    if (error) {
      console.error("Error from Facebook: " + error);
    } else {
      console.log("Response from Facebook: " + faceResp.body);
      response.send("Message sent to Workspace Chat");
      var post_id = JSON.parse(body).id;
      console.log('Published ' + post_id);
    }
  });
}

