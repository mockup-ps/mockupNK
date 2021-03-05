import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBDsV9jeDbEq4vY2raSs9mLus1BVoas2zg",
  authDomain: "login-mockup.firebaseapp.com",
  projectId: "login-mockup"
};

const firebaseApp = firebase.initializeApp(config);

export const fireAuth = firebaseApp.auth();

