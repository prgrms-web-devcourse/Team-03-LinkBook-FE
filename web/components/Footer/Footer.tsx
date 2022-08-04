import * as S from './Footer.style';
import FooterItem from './FooterItem';
import SNSButton from './SNSButton';

const Footer = () => {
  const itemFrontText = [
    {
      strong: '강력 3팀-Front',
      plain: '프로그래머스 데브코스 프론트엔드 과정',
    },
    {
      strong: '팀장',
      plain: 'STONY',
    },
    {
      strong: '팀원',
      plain: 'HAEYUM | MIRAL | ONION',
    },
    {
      strong: '한줄 소개',
      plain: '강력 3팀 프론트엔드입니다.',
    },
  ];

  const itemBackText = [
    {
      strong: '강력 3팀-Back',
      plain: '프로그래머스 데브코스 백엔드 과정',
    },
    {
      strong: '팀장',
      plain: 'HOWARD',
    },
    {
      strong: '팀원',
      plain: 'ELLA | RAN | HARRY | SMITH',
    },
    {
      strong: '한줄 소개',
      plain: '강력 3팀 백엔드입니다.',
    },
  ];

  return (
    <S.Container>
      <S.FooterText>
        <S.TextContainer>
          <S.TextNavigation>
            <S.Nav>
              <S.NavItem href="https://github.com/prgrms-web-devcourse/Team-03-LinkBook-FE">
                프론트깃허브
              </S.NavItem>
              <S.NavItem href="https://github.com/prgrms-web-devcourse/Team-03-LinkBook-BE">
                백엔드깃허브
              </S.NavItem>
            </S.Nav>
            <S.Nav>
              <SNSButton text="인스타그램" iconName="ico_instagram" />
              <SNSButton text="카카오 채널" iconName="ico_kakaochannel" />
            </S.Nav>
          </S.TextNavigation>
          <S.TextInfo>
            <FooterItem title="FRONTEND" textArr={itemFrontText} />
            <FooterItem title="BACKEND" textArr={itemBackText} />
          </S.TextInfo>
        </S.TextContainer>
      </S.FooterText>
      <S.FooterCopyright>
        <S.Copyright>Copyright ⓒ 2022 Team3 All rights reserved.</S.Copyright>
      </S.FooterCopyright>
    </S.Container>
  );
};

export default Footer;
