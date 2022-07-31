import Image from 'next/image';

interface Props {
  name: string;
  size: string | number;
  onClick?: () => void;
}

const defaultProps = {
  size: '',
  name: '',
};

const Icon = ({ size, name, onClick, ...styles }: Props) => {
  return (
    <Image
      src={`/icons/${name}.svg`}
      width={size}
      height={size}
      alt="icon"
      {...styles}
      onClick={onClick}
    />
  );
};

Icon.defaultProps = defaultProps;

export default Icon;
