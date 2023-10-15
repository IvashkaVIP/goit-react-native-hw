import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

import {auth} from "../../firebase/config"


export const authSignUp =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
      try {
          console.log({ email, password });
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log("signUp User: ", user);
    } catch (err) {
      console.log("err", err);
      console.log("err.message", err.message);
    }
  };
export const authSignIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      console.log({ email, password });
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("signIn User: ", user);
    } catch (err) {
      console.log("err", err);
      console.log("err.message", err.message);
    }
  };
export const authSignOut = () => async (dispatch, getState) => {};
