import * as S from '../../Modal.style';
import { Button, Input } from '../../../index';
import { MouseEventHandler, useCallback, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useUserInfo } from '../contexts/UserProvider';
import { requestEmailKey, validateEmailKey } from '../../../../apis/EmailAPI';

interface Props {
  handlePage: MouseEventHandler;
}

interface EmailInput {
  email: string;
}

const Page01 = ({ handlePage }: Props) => {
  const [emailValue, setEmailValue] = useState('');
  const { setEmail } = useUserInfo();
  const keyRef = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailInput>();

  const onSubmit: SubmitHandler<EmailInput> = useCallback(async (data) => {
    const { email } = data;

    try {
      await requestEmailKey(email);
      setEmailValue(email);
      alert('입력한 이메일로 인증 코드가 전송되었습니다.');
    } catch (error) {
      alert('문제가 발생했습니다. 다시 시도해주세요.');
      console.log(error);
    }
  }, []);

  const onValidateKey = async () => {
    try {
      await validateEmailKey(emailValue, keyRef.current.value);
      alert('인증되었습니다.');
      setEmail(emailValue);
    } catch (error) {
      alert('인증코드가 일치하지 않습니다.');
      console.log(error);
    }
  };

  return (
    <S.InnerContainer onSubmit={handleSubmit(onSubmit)}>
      <S.Title>
        <S.MainText>Linkbook</S.MainText>에 처음 오셨군요! 🎉
        <br />
        사용할 <S.MainText>아이디</S.MainText>를 입력해 주세요.
        <S.Description>이메일 형식으로 입력해 주세요!</S.Description>
      </S.Title>
      <S.InputContainer>
        <div>
          <Input
            placeholder="아이디(이메일)"
            type="text"
            {...register('email', {
              required: '이메일은 필수 입력입니다.',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '이메일 형식에 맞지 않습니다.',
              },
            })}
          >
            <Button type="submit" version="modal">
              인증번호 발송
            </Button>
          </Input>
          {errors.email && (
            <S.errorText role="alert">{errors.email.message}</S.errorText>
          )}
        </div>
        <div>
          <Input
            placeholder="이메일로 발송된 인증 코드를 입력해주세요."
            type="text"
            ref={keyRef}
          >
            <Button type="button" version="modal" onClick={onValidateKey}>
              인증
            </Button>
          </Input>
        </div>
      </S.InputContainer>
      <S.ButtonContainer>
        <Button type="button" onClick={handlePage}>
          다음 &gt;
        </Button>
      </S.ButtonContainer>
    </S.InnerContainer>
  );
};

export default Page01;
