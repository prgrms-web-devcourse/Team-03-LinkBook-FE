import * as S from '../../Modal.style';
import { MouseEventHandler, useCallback, useState, useRef } from 'react';
import { Button, Input, Icon, Toast } from '../../../index';
import { useUserInfo } from '../contexts/UserProvider';
import { SubmitHandler, useForm } from 'react-hook-form';
import { userSignUp } from '../../../../apis/UserAPI';
import { RegisterValidation } from '../../../../constants/validation.constants';
import { useSetRecoilState } from 'recoil';
import { showModalStatus } from '../../../../recoil/showModal';
import { showLoginModal } from '../../../../constants/modal.constants';

interface PasswordInput {
  password: string;
}

const Page02 = () => {
  const setShowModalStatus = useSetRecoilState(showModalStatus);
  const { email, removeUserInfo } = useUserInfo();
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isValidate, setIsValidate] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordInput>();

  const handleSwitchLoginModal = () => {
    setShowModalStatus(showLoginModal);
  };

  const onSubmit: SubmitHandler<PasswordInput> = useCallback(async (data) => {
    const password = passwordRef.current.value;
    if (data.password !== password) {
      setIsValidate(false);
      return;
    }

    setIsValidate(true);

    try {
      await userSignUp({ email, password });
      await removeUserInfo();
      Toast.show('회원가입이 완료되었습니다. 로그인을 진행해주세요.');
      handleSwitchLoginModal();
    } catch (error) {
      Toast.show('이미 등록된 회원이거나 이메일 인증이 진행되지 않았습니다.');
      console.log(error);
    }
  }, []);

  return (
    <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <S.Title>
        <br />
        사용할 <S.MainText>비밀번호</S.MainText>를 입력해 주세요.
        <S.Description>
          최소 8자, 문자와 숫자의 조합으로 입력해주세요.
        </S.Description>
      </S.Title>
      <S.InputContainer>
        <Input
          placeholder="비밀번호"
          type="password"
          errorText={errors.password && errors.password.message}
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            pattern: RegisterValidation.password,
          })}
        />
        <Input
          placeholder="비밀번호를 한번 더 입력해 주세요."
          type="password"
          ref={passwordRef}
          errorText={!isValidate && '비밀번호가 일치하지 않습니다.'}
        />
      </S.InputContainer>
      <S.ButtonContainer>
        <Button type="submit">회원가입 &gt;</Button>
      </S.ButtonContainer>
    </S.FormContainer>
  );
};

export default Page02;
