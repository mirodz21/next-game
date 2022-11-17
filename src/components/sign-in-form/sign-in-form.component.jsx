import "./sign-in-form.styles.scss";
import { useState } from "react";

import {
  signInWithGooglePopUp,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase-utilities";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASS } from "../button/button.component";

const defaultFormFIelds = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFIelds);
  const { email, password } = formFields;

  // RESET INPUT FIELDS
  const resetFormFields = () => {
    setFormFields(defaultFormFIelds);
  };
  // SIGN IN WITH GOOGLE
  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();
  };
  //SUBMIT HADLER
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Invalid Password");
          break;
        case "auth/user-not-found":
          alert("Invalid User Account");
          break;
        default:
          console.log(error);
      }
    }
    resetFormFields();
  };
  // SET INPUT VALUES
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  console.log(formFields);

  return (
    <div className="sign-up-container">
      <h2>Log-in</h2>
      <span>Sign in with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASS.google}
            onClick={signInWithGoogle}
          >
            Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
