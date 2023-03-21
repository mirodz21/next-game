import { useState } from "react";
import {
  createAuthUserWithEmailAndPass,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase-utilities";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASS } from "../button/button.component";
import "./sign-up.styles.scss";

const defaultFormFIelds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFIelds);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFIelds);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password Dont Match. Try Again");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPass(email, password);
      console.log(user);

      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User Account already exist");
      } else {
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
  return (
    <div className="sign-up-container">
      <h2>Dont have an account?</h2>
      <span>Sign Up with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttonType={BUTTON_TYPE_CLASS.base} type="submit">
          SUBMIT
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
