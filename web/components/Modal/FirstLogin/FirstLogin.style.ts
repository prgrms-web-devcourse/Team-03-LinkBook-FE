import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 420px;
  height: 420px;
  margin: 30px auto;
`;

export const Title = styled.p`
  width: fit-content;
  margin: 0 auto;
  padding-top: 20px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h[0]};
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 1.3;
  text-align: center;

  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Description = styled.p`
  width: fit-content;
  margin: 20px auto 0 auto;
  font-size: ${({ theme }) => theme.fontSize.b[1]};
`;

export const MainText = styled.span`
  color: ${({ theme }) => theme.colors.main[0]};
`;

export const IconContainer = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  overflow: hidden;
  border: ${({ theme }) => `1px solid ${theme.colors.gray[4]}`};
  border-radius: 300px;
`;

export const ButtonContainer = styled.div`
  width: fit-content;
  margin: 20px auto 0 auto;
`;

export const PreviousButton = styled.div`
  position: absolute;
  top: 55px;
  left: 20px;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  box-sizing: border-box;
  margin-bottom: 150px;
  padding: 10px 30px;
  color: ${({ theme }) => theme.colors.white[0]};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.b[0]};
  background-color: ${({ theme }) => theme.colors.main[0]};
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;

export const LogoText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l[2]};
  font-family: 'Dongle', sans-serif;
`;
