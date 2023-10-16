import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

import { store } from "../store";

import { auth } from "../../firebase/config";
import { authSlice } from "./authSlice";

export const authSignUp =
  ({ nickname, email, password }) =>
  async (dispatch, getState) => {
    try {
      // console.log("authSignUp >>>>>>>>>  ", { email, password, nickname });
      await createUserWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;
      await updateProfile(user, { displayName: nickname });
      const { uid, displayName } = user;
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: uid,
          nickname: displayName,
        })
      );

      // console.log(auth.currentUser);
      // console.log("authSignUp >>>>>>>>>>>>>  ",store.getState());
    } catch (err) {
      console.log("err", err);
      console.log("err.message", err.message);
    }
  };
export const authSignIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      console.log("authSignIn >>>>>>> ", { email, password });
      const user = await signInWithEmailAndPassword(auth, email, password);
      // console.log("signIn User: ", user);
    } catch (err) {
      console.log("err", err);
      console.log("err.message", err.message);
    }
  };

export const authStateChangeUser = () => async (dispatch, getState) => {
  onAuthStateChanged(auth, (user) => {
    // console.log("User ", user);
    if (user) {
      const { uid, displayName, email } = auth.currentUser;
      // console.log(uid,"   ",displayName,"   ",email);
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: uid,
          nickname: displayName,
          email,
        })
      );
      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
      // console.log(" authStateChangeUser >>>>>>>>>  ", store.getState());
    }
  });
};

export const authSignOutUser = () => async (dispatch, getState) => {
  console.log("signOut");
  // await signOut(auth);
  // dispatch(authSlice.actions.authSignOut());

  try {
    await signOut(auth);
    dispatch(authSlice.actions.authSignOut());
  } catch (error) {
    console.log("error", error.message);
  }
};
