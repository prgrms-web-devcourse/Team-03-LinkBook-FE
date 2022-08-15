import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 405px;
  margin-bottom: 40px;
  font-family: 'Noto Sans KR', sans-serif;
  background: url('/backgrounds/NoResultArea.svg');
  border-radius: 10px;
  overflow: hidden;
  animation: moveLeftToRight 7s infinite linear;

  @keyframes moveLeftToRight {
    to {
      background-position: left bottom;
    }
    from {
      background-position: right bottom;
    }
  }
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url('/backgrounds/NoResultArea_Back.svg');
  animation: moveRightToLeft 4s infinite linear;

  @keyframes moveRightToLeft {
    to {
      background-position: right bottom;
    }
    from {
      background-position: left bottom;
    }
  }
`;

export const InnerContainer = styled.div`
  position: absolute;
  top: calc(50% - 65px);
  left: calc(50% - 100px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 200px;
  height: 130px;
`;

export const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  background: url('/backgrounds/whale1.svg');
  background-position: center center;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.b[1]};
  font-weight: 700;
`;
