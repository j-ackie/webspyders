// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  browserPopupRedirectResolver,
  initializeAuth,
} from "firebase/auth";
import { get, getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVClixKl6yBmnQYUK-Xu5fDs-EzD-UVVQ",
  authDomain: "web-spyders.firebaseapp.com",
  projectId: "web-spyders",
  storageBucket: "web-spyders.appspot.com",
  messagingSenderId: "574278336116",
  appId: "1:574278336116:web:65aa1002fe47540888db21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: browserLocalPersistence,
  popupRedirectResolver: browserPopupRedirectResolver,
});

const database = getDatabase(app);

const getData = async (path: string) => {
  return await get(ref(database, path));
};

const setData = async (path: string, data: unknown) => {
  await set(ref(database, path), data);
};

export { app, auth, database, getData, setData };
