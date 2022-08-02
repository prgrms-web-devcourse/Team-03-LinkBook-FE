import * as S from './ModalPreview.style';
import { Icon } from '../..';

interface Props {
  imgSrc: string;
}

export const ModalPreview = ({ imgSrc }: Props) => {
  return (
    <>
      {imgSrc ? (
        <S.ModalImage src={imgSrc} layout="fill" />
      ) : (
        <Icon name="camera" size={60} />
      )}
    </>
  );
};

export default ModalPreview;
