const functions = require('firebase-functions');
var request = require('request');

// const ACCESS_TOKEN = functions.config().app.token;
const ACCESS_TOKEN = 'DQVJ1WmpUV2piWkV2LWwzR1JTMjItQzRjUnRJSG1sTFZAXR1B1bVZAPLW5rbUFsT0NFQjhleXczclBUQzRJeWFUMWRuakw1NzNPcWhlVmdxd0RYTmJHVHppUDBuUWV2d1p2ZA04zSzNTNXZAHNkZAVRTAyVTU5ZA2ZA4WmkxeEc2dkl0cGVyMEVnSXVnVVBXUkVMSkZA4emNsMWd5MUtXWlV4a09Cc3FPNG40bG5IUTNPRW95Y2NFbl9XRzF4dTJPZAFdGUThjdkN3SGt3'
const TARGET_GROUP = "2786708648025528";

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
  sendMessage(request.body.details, request.body.incident_url, () => {
    response.send("Message sent to Workspace Chat");
  });
});

function sendMessage(message, link, callback) {
  graphapi({
    method: 'POST',
    url: '/me/messages',
    qs: {
      "recipient": {
        "thread_key": ['2786708648025528']
      },
      'message': { 'text': 'teste' }
    }
  }, (error, response, body) => {
    if (error) {
      console.error("Error from Facebook: " + error);
    } else {
      console.log("Response from Facebook: " + response.body);
      var post_id = JSON.parse(body).id;
      console.log('Published ' + post_id);
      return callback();
    }
  });
}

sendMessage('teste', 'https://www.pravaler.com.br', () => { })
