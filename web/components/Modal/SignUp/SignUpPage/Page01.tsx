import * as S from '../../Modal.style';
import { Button, Icon, Input } from '../../../index';
import { MouseEventHandler, useCallback, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useUserInfo } from '../contexts/UserProvider';
import { requestEmailKey, validateEmailKey } from '../../../../apis/EmailAPI';
import { RegisterValidation } from '../../../../constants/validation.constants';
import Timer from './Timer';

interface Props {
  handlePage: MouseEventHandler;
}

interface EmailInput {
  email: string;
}

const Page01 = ({ handlePage }: Props) => {
  const [emailValue, setEmailValue] = useState('');
  const [isValidate, setIsValidate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timerVisible, setTimerVisible] = useState(false);
  const { setEmail } = useUserInfo();
  const keyRef = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailInput>();

  const handleSubmitInputData: SubmitHandler<EmailInput> = useCallback(
    async (data) => {
      const { email } = data;

      try {
        setIsLoading(true);
        await requestEmailKey(email);
        setEmailValue(email);
        alert('입력한 이메일로 인증 코드가 전송되었습니다.');
        setIsLoading(false);
        setTimerVisible(true);
      } catch (error) {
        alert('문제가 발생했습니다. 다시 시도해주세요.');
        console.log(error);
      }
    },
    [],
  );

  const handleClickValidateKey = async () => {
    try {
      await validateEmailKey(emailValue, keyRef.current.value);
      alert('인증되었습니다.');
      setIsValidate(true);
      setEmail(emailValue);
      setTimerVisible(false);
    } catch (error) {
      alert('인증코드가 일치하지 않습니다.');
      console.log(error);
    }
  };

  const handleClickCheckValidate: MouseEventHandler = (e) => {
    if (!isValidate) {
      alert('이메일 인증을 먼저 진행해주세요.');
      return;
    }

    handlePage(e);
  };

  return (
    <S.FormContainer onSubmit={handleSubmit(handleSubmitInputData)}>
      <S.Title>
        <S.MainText>Linkbook</S.MainText>에 처음 오셨군요! 🎉
        <br />
        사용할 <S.MainText>아이디</S.MainText>를 입력해 주세요.
        <S.Description>이메일 형식으로 입력해 주세요!</S.Description>
      </S.Title>
      <S.InputContainer>
        <Input
          placeholder="아이디(이메일)"
          type="text"
          errorText={errors.email && errors.email.message}
          {...register('email', {
            required: '이메일은 필수 입력입니다.',
            pattern: RegisterValidation.email,
          })}
        >
          {isLoading ? (
            <Button type="submit" version="modal" disabled={true}>
              <S.Spinner>
                <Icon name="loading" size={14} />
              </S.Spinner>
            </Button>
          ) : (
            <>
              {timerVisible && <Timer mm={3} ss={0} />}
              <Button type="submit" version="modal">
                인증번호 발송
              </Button>
            </>
          )}
        </Input>
        <Input
          placeholder="이메일로 발송된 인증 코드를 입력해주세요."
          type="text"
          ref={keyRef}
        >
          <Button
            type="button"
            version="modal"
            onClick={handleClickValidateKey}
          >
            인증
          </Button>
        </Input>
      </S.InputContainer>
      <S.ButtonContainer>
        <Button type="button" onClick={handleClickCheckValidate}>
          다음 &gt;
        </Button>
      </S.ButtonContainer>
    </S.FormContainer>
  );
};

export default Page01;
