import React, { useState } from 'react';
import * as S from './ImageUpload.style';
import ModalPreview from './ModalPreview';
import PagePreview from './PageImage';

interface Props {
  //setImageSrc => 상위 컴포넌트에서 form으로 api 보낼때 사용
  version: 'modal' | 'page';
}

const ImageUpload = ({
  //setImageSrc,
  version,
}: Props) => {
  const [imgSrc, setImgSrc] = useState('');

  // Input 추가하면 ImageSrc 추가
  const onChangeInput = (event) => {
    console.log(event.target.files[0]);
    // setImageSrc(file);

    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.onloadend = () => {
      const resultImage = reader.result;
      setImgSrc(resultImage);
    };
  };

  // 이미지 삭제 버튼 누르면 ImageSrc 리셋
  const onDeleteImg = (event: React.MouseEvent) => {
    event.preventDefault();
    setImgSrc('');
    // setImageSrc('');
  };

  return (
    <>
      <S.ImageUploadForm version={version}>
        <S.FileLabel htmlFor="fileInput">
          {version === 'modal' ? (
            <ModalPreview imgSrc={imgSrc} />
          ) : (
            <PagePreview imgSrc={imgSrc} />
          )}
        </S.FileLabel>
        <S.FileInput
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={onChangeInput}
        />
      </S.ImageUploadForm>
    </>
  );
};

export default ImageUpload;
