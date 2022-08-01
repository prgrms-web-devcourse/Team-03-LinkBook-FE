import Icon from '../../Icon';
import * as S from './PagePreview.style';

interface Props {
  imgSrc: string;
}

export const PagePreview = ({ imgSrc }: Props) => {
  return (
    <>
      {imgSrc ? (
        <S.PreviewImage src={imgSrc} layout="fill" />
      ) : (
        <S.DefaultContainer>
          <Icon name="camera" size={100} />
          <S.UploadText>대표 사진을 설정해주세요</S.UploadText>
        </S.DefaultContainer>
      )}
    </>
  );
};

export default PagePreview;
