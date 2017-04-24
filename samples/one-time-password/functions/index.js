// @flow
const serviceAccount = require('./service_account.json');
const admin = require('firebase-admin');
var functions = require('firebase-functions');
const createUser = require('./create_user');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://one-time-password-67371.firebaseio.com'
});

exports.createUser = functions.https.onRequest(createUser);