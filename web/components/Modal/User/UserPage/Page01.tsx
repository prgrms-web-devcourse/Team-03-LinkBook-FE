import * as S from '../../Modal.style';
import { MouseEventHandler, useEffect, useState } from 'react';
import { Button, Input, ImageUpload } from '../../../index';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { userInfo } from '../../../../recoil/user';
import { useUserInfo } from '../contexts/UserInfoProvider';
import { getUserInfo, updateUserInfo } from '../../../../apis/UserAPI';
import { showModalStatus } from '../../../../recoil/showModal';
import { User } from '../../../../types';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  handlePage: MouseEventHandler;
  token: string;
  userData: User;
}

interface IFormInput {
  name: string;
  introduce: string;
}

const Page01 = ({ handlePage, token, userData }: Props) => {
  const { setBasicUserInfo } = useUserInfo();
  const setUserInfoState = useSetRecoilState(userInfo);
  const closeModal = useResetRecoilState(showModalStatus);
  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>();

  const [imageSrc, setImageSrc] = useState('');

  const handleClickUpdateTags: MouseEventHandler<HTMLInputElement> = (e) => {
    const name = getValues('name');
    const introduce = getValues('introduce');
    const profileImage =
      imageSrc.length === 0
        ? 'https://linkbook-s3-1.s3-ap-northeast-2.amazonaws.com/static/userImage.png.png'
        : imageSrc;

    const storeUserData = {
      name,
      introduce,
      image: profileImage,
    };
    setBasicUserInfo(storeUserData);

    handlePage(e);
  };

  const handleUpdateUserInfo: SubmitHandler<IFormInput> = async (data, e) => {
    e.preventDefault();

    const { name, introduce } = data;
    const profileImage =
      imageSrc.length === 0
        ? 'https://linkbook-s3-1.s3-ap-northeast-2.amazonaws.com/static/userImage.png.png'
        : imageSrc;

    try {
      const updateUserData = {
        name,
        introduce,
        image: profileImage,
        interests: userData.interests,
      };
      await updateUserInfo(updateUserData, token);

      const newUserInfo = await getUserInfo(token);
      setUserInfoState(newUserInfo);
      closeModal();
    } catch (error) {
      console.log(error);
      alert('문제가 발생했습니다.');
    }
  };

  useEffect(() => {
    if (!userData) return;
    const { name, introduce, image } = userData;

    setValue('name', name);
    setValue('introduce', introduce);
    setImageSrc(image);

    setFocus('name');
  }, [userData]);

  return (
    <>
      {userData && (
        <S.InnerContainer>
          <S.Title>
            {userData.name}님의 <br />
            <S.MainText>수정할 정보</S.MainText>를 입력해주세요.
          </S.Title>
          <S.ImageUploadWrapper>
            <ImageUpload
              version="modal"
              imageSrc={imageSrc}
              setImageSrc={setImageSrc}
            />
          </S.ImageUploadWrapper>
          <S.FormContainer onSubmit={handleSubmit(handleUpdateUserInfo)}>
            <S.UserInputContainer>
              <Input
                placeholder="변경할 닉네임"
                type="text"
                {...register('name', {
                  required: true,
                  minLength: 1,
                  maxLength: 8,
                })}
                errorText={errors.name && '1-8자 사이의 길이로 입력해주세요. '}
              />
              <Input
                placeholder="변경할 한 줄 소개"
                type="text"
                {...register('introduce', {
                  required: true,
                  minLength: 1,
                  maxLength: 50,
                })}
                errorText={
                  errors.introduce && '1-50자 사이의 길이로 입력해주세요. '
                }
              />
            </S.UserInputContainer>
            <S.ButtonContainer>
              <Button type="submit">수정 완료</Button>
              <Button
                type="button"
                onClick={handleClickUpdateTags}
                version="mainLight"
              >
                관심 태그 수정
              </Button>
            </S.ButtonContainer>
          </S.FormContainer>
        </S.InnerContainer>
      )}
    </>
  );
};

export default Page01;
