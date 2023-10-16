import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase/config";
import { authSlice } from "./authSlice";

export const authSignUp =
  ({ nickname, email, password }) =>
  async (dispatch, getState) => {
    try {
      console.log("authSignUp >>>>>>>>>  ", { email, password });
      const user = await createUserWithEmailAndPassword(auth, email, password);

      
      await updateProfile(auth.currentUser, { displayName: nickname });
      const { uid, displayName } = user;

      dispatch(
        authSlice.actions.updateUserProfile({
          userId: uid,
          nickname: displayName,
        })
      );

      // console.log("AUTH: >>>>>> ", auth);

      // console.log("signUp User: ", user);
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

export const authStateChanged = () => async (dispatch, getState) => {
  onAuthStateChanged(auth, (user) => {
    console.log("User ", user);
    // if (user) {
    //   const { uid, displayName, photoURL, email } = auth.currentUser;
    // dispatch(
    //   updateUserProfile({
    //     userId: uid,
    //     login: displayName,
    //     avatar: photoURL,
    //     email,
    //   })
    // );
    // dispatch(authStateChange({ stateChange: true }));
    // }
  });
};

export const authSignOut = () => async (dispatch, getState) => {};
