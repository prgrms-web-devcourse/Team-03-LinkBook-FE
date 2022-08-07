import * as S from "./Button.style";

interface Props {
  children: React.ReactNode | string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled, ...styles }: Props) => {
  return (
    <S.Button onClick={onClick} disabled={disabled} {...styles}>
      {children}
    </S.Button>
  );
};

export default Button;
