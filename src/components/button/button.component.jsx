import { BaseButton, googleButton, invertedButton } from "./button.styles";

export const BUTTON_TYPE_CLASS = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASS.base) =>
  ({
    [BUTTON_TYPE_CLASS.base]: BaseButton,
    [BUTTON_TYPE_CLASS.google]: googleButton,
    [BUTTON_TYPE_CLASS.inverted]: invertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};
export default Button;
