import * as S from '../../Modal.style';
import { PAGE_URL } from '../../../../constants/url.constants';
import { useRouter } from 'next/router';
import { useResetRecoilState } from 'recoil';
import { showModalStatus } from '../../../../recoil/showModal';

const Page05 = () => {
  const resetShowModal = useResetRecoilState(showModalStatus);
  const router = useRouter();

  const handleClickMoveInfoPage = () => {
    router.push(PAGE_URL.INFO);
    resetShowModal();
  };

  return (
    <S.InnerContainer>
      <S.Title>
        <br />
        <br />
        <br />
        가입을 축하드려요! 🎉
        <br />
        <S.MainText>북마크 폴더</S.MainText>를 등록하러 가 볼까요?
      </S.Title>
      <S.ButtonContainer>
        <S.ConfirmButton type="button" onClick={handleClickMoveInfoPage}>
          <S.LogoText>링북</S.LogoText> 100% 활용법 &gt;
        </S.ConfirmButton>
      </S.ButtonContainer>
    </S.InnerContainer>
  );
};

export default Page05;
