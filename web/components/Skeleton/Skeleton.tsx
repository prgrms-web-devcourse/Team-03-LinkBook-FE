import * as S from './Skeleton.style';

interface Props {
  width: string | number;
  height: string | number;
  repeat: number;
}

const Skeleton = ({ width, height, repeat }: Props) => {
  const repeatArr = Array.from({ length: repeat }, (_, index) => index);

  return (
    <>
      {repeatArr.map((num) => (
        <S.SkeletonContainer key={num} width={width} height={height} />
      ))}
    </>
  );
};

export default Skeleton;
