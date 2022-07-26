import * as S from './Text.style';

interface Props {
  children: React.ReactNode;
  size?: string | number;
  color?: string;
  weight?: string | number;
  version?: string;
}

const defaultProps = {
  size: '14px',
};

const Text = ({ children, size, color, weight, version, ...styles }: Props) => {
  return (
    <>
      <S.Text
        size={size}
        color={color}
        weight={weight}
        version={version}
        {...styles}
      >
        {children}
      </S.Text>
    </>
  );
};

Text.defaultProps = defaultProps;

export default Text;
