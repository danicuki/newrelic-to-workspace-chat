# New Relic to Workplace
Custom Integration between New Relic and Facebook Workspace Chat using Firebase Functions

## How to use
Just setup your firebase app using the commands bellow and then config your new relic alert to point to the functions callback endpoint. (https://FUNCTIONS_REGION-FUNCTIONS_PROJECT.cloudfunctions.net/newrelicToWorkspaceChat)
)

# setup
`$ firebase functions:config:set app.token=<YOUR_FACEBOOK_APP_TOKEN_COMES_HERE>

# deploy
`$ firebase deploy`
