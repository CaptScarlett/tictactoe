import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button = ({ label, onClick }: ButtonProps): JSX.Element => {
  return <StyledButton onClick={() => onClick()}>{label}</StyledButton>;
};

export default Button;
