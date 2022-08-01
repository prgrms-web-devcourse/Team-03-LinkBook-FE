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
          <S.UploadButton type="button">대표 사진 업로드</S.UploadButton>
          <S.UploadText>또는 사진을 드롭해주세요</S.UploadText>
        </S.DefaultContainer>
      )}
    </>
  );
};

export default PagePreview;
