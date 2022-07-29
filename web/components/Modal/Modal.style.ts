import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: calc(50% - 295px);
  left: calc(50% - 255px);
  z-index: 30;
  width: 520px;
  height: 590px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white[0]};
  border-radius: 20px;
  animation: modalShow 0.3s;

  @keyframes modalShow {
    from {
      margin-top: -50px;
      opacity: 0;
    }
    to {
      margin-top: 0;
      opacity: 1;
    }
  }
`;

export const Dim = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  animation: modalBgShow 0.3s;

  @keyframes modalBgShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.main};
  font-weight: bold;
  font-size: 35px;
  font-family: 'Dongle', sans-serif;
`;

export const CloseBtn = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  border: none;
  border-radius: 50px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[5]};
  }
`;
