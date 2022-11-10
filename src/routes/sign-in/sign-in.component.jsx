import Button from "../../components/button/button.component";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase-utilities";

import SignUp from "../../components/sign-up/sign-up.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <div>
      <h2>Sign In</h2>
      <Button buttonType="google" onClick={logGoogleUser}>
        Google Sign In
      </Button>
      <SignUp />
    </div>
  );
};

export default SignIn;
