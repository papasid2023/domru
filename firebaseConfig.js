import { initializeApp} from "firebase/app";
import {initializeAuth, getReactNativePersistence} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, getDoc, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAOytmkxvnBd9WCkFsj3T3jfeZTh2seKz8",
  authDomain: "domru-a3c27.firebaseapp.com",
  projectId: "domru-a3c27",
  storageBucket: "domru-a3c27.appspot.com",
  messagingSenderId: "358471706966",
  appId: "1:358471706966:web:ba9aa4116866c983a2cef7"
};

const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const FIREBASE_DB = getFirestore(FIREBASE_APP);

export {FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB, getDoc, addDoc};