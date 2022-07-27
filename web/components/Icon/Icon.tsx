import Image from 'next/image';

interface Props {
  name: string;
  size: string;
}

const defaultProps = {
  size: '',
  name: '',
};

const Icon = ({ size, name }: Props) => {
  return (
    <Image src={`/icons/${name}.svg`} width={size} height={size} alt="icon" />
  );
};

Icon.defaultProps = defaultProps;

export default Icon;
