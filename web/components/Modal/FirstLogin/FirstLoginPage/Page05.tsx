import * as S from '../../Modal.style';
import Link from 'next/link';
import { MouseEventHandler } from 'react';
import { Icon } from '../../../index';
import { PAGE_URL } from '../../../../constants/url.constants';

interface Props {
  handlePreviousPage: MouseEventHandler;
}

const Page05 = ({ handlePreviousPage }: Props) => {
  return (
    <>
      <S.PreviousButton onClick={handlePreviousPage}>
        <Icon name="arrowLeft" size={30} />
      </S.PreviousButton>
      <S.Title>
        <br />
        <br />
        <br />
        가입을 축하드려요! 🎉
        <br />
        <S.MainText>북마크 폴더</S.MainText>를 등록하러 가 볼까요?
      </S.Title>
      <S.ButtonContainer>
        <Link href={PAGE_URL.INFO} passHref>
          <S.ConfirmButton type="button">
            <S.LogoText>링북</S.LogoText> 100% 활용법 &gt;
          </S.ConfirmButton>
        </Link>
      </S.ButtonContainer>
    </>
  );
};

export default Page05;
