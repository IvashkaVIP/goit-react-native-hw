import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEUhVRl1T4QATfO--07jxgYVOZPyM-Vf4",
  authDomain: "mynativebase79.firebaseapp.com",
  projectId: "mynativebase79",
  storageBucket: "mynativebase79.appspot.com",
  messagingSenderId: "909154790196",
  appId: "1:909154790196:web:ff6a8af2f0e027cce9d361",
};

const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
