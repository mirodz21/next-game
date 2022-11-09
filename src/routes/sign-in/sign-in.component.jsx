import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase-utilities";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h2>Sign In</h2>
      <button onClick={logGoogleUser}>Google Sign In</button>
    </div>
  );
};

export default SignIn;
