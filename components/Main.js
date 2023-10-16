// import { moduleN } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../router";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import {authStateChangeUser} from "../redux/auth/authOperations"
import{store} from "../redux/store"

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

const Main = () => {
const { stateChange } = useSelector((state) => state.auth);
const dispatch = useDispatch();
useEffect(() => {
  dispatch(authStateChangeUser());
}, []);
    
console.log("Main >>>>>>>>>  ",store.getState())
const routing = useRoute(stateChange);
       
    return <NavigationContainer>{routing}</NavigationContainer>;
}

export default Main;