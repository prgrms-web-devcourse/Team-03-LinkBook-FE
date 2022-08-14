import styled from '@emotion/styled';
import { Button } from '../../../../components';

interface Props {
  hasPinnedFolder: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const BackgroundImage = styled.div<Props>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${({ hasPinnedFolder }) => (hasPinnedFolder ? '490px' : '100vh')};
  background-image: url('/backgrounds/myFoldersAreaLogIn.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Header = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l[1]};
  font-weight: 700;
  text-align: center;
  line-height: 52px;

  & > span {
    font-size: inherit;
  }
`;

export const StyledButton = styled(Button)`
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px;
`;
