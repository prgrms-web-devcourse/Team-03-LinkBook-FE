import * as S from '../Modal.style';
import { Button, Icon, Input, Switch } from '../../index';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { ScrapOriginFolder } from '../../../types';

interface Props {
  originFolder: ScrapOriginFolder;
  setScrapFolder: ({ title, isPrivate, isPinned }: ScrapOriginFolder) => void;
}

const Scrap = ({ originFolder, setScrapFolder }: Props) => {
  const [updatedIsPrivate, setUpdatedIsPrivate] = useState(false);
  const [updatedIsPinned, setUpdatedIsPinned] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ScrapOriginFolder>();

  const handleSubmitScrap: SubmitHandler<ScrapOriginFolder> = (data, e) => {
    e.preventDefault();

    const { title } = data;
    const updatedScrapFolder: ScrapOriginFolder = {
      title,
      isPrivate: updatedIsPrivate,
      isPinned: updatedIsPinned,
    };

    setScrapFolder(updatedScrapFolder);
  };

  const handleClickSetIsPinned = () => {
    setUpdatedIsPinned(!updatedIsPinned);
  };

  useEffect(() => {
    if (!originFolder) return;

    const { title, isPrivate, isPinned } = originFolder;
    setValue('title', title);
    setUpdatedIsPrivate(isPrivate);
    setUpdatedIsPinned(isPinned);
  }, [originFolder]);

  return (
    <S.FormContainer onSubmit={handleSubmit(handleSubmitScrap)}>
      <S.Title>
        <br />
        스크랩 할 게시물의 <S.MainText>공개 범위</S.MainText>와
        <br />
        <S.MainText>수정할 제목</S.MainText>을 입력해 주세요.
      </S.Title>
      <S.ButtonContainer>
        <Switch
          isPrivate={updatedIsPrivate}
          setIsPrivate={setUpdatedIsPrivate}
        />
        <S.IconWrapper onClick={handleClickSetIsPinned}>
          <Icon name={updatedIsPinned ? 'pin_blue_ic' : 'ico_pin'} size={30} />
        </S.IconWrapper>
      </S.ButtonContainer>
      <S.InputContainer>
        <Input
          placeholder="수정할 제목 입력"
          type="text"
          {...register('title', {
            required: '제목은 필수 입력입니다.',
          })}
          errorText={errors.title && errors.title.message}
        />
      </S.InputContainer>
      <S.ButtonContainer>
        <Button type="submit">스크랩 &gt;</Button>
      </S.ButtonContainer>
    </S.FormContainer>
  );
};

export default Scrap;
