// import { moduleN } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../router";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import {authStateChanged} from "../redux/auth/authOperations"

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

const Main = () => {
// const [state, setState]=useState(null)
const { stateChange } = useSelector((state) => state.auth);
const dispatch = useDispatch();
useEffect(() => {
  dispatch(authStateChanged());
}, []);
    
    // console.log("state : >>>>>>>>>>>>> ", state)
    // const routing = useRoute(stateChange);
    const routing = useRoute(false);
    
    return <NavigationContainer>{routing}</NavigationContainer>;
}

export default Main;