interface Props {
  name: string;
  width: number;
  height: number;
  onClick?: () => void;
}

const Icon = ({ name, width, height, onClick }: Props) => {
  return (
    <img
      src={`/icons/${name}.png`}
      width={width}
      height={height}
      alt=""
      onClick={onClick}
    />
  );
};

export default Icon;
