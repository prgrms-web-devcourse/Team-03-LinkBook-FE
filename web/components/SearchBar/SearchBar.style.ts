import styled from '@emotion/styled';

interface Props {
  position?: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 7;
  height: 165px;
  background-color: ${({ theme }) => theme.colors.white[0]};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 10px -3px;
  animation: searchBarShow 0.3s;

  @keyframes searchBarShow {
    from {
      margin-top: -10px;
      opacity: 0;
    }
    to {
      margin-top: 0;
      opacity: 1;
    }
  }
`;

export const Dim = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
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

export const Search = styled.form`
  display: flex;
  z-index: 1;
  width: 500px;
  height: 40px;
`;

export const SearchInner = styled.div`
  flex-grow: 1;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 40px;
  padding-right: 70px;
  outline: none;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fontSize.h[2]};
  background-color: ${({ theme }) => theme.colors.white[2]};
`;

export const Actions = styled.div<Props>`
  position: absolute;
  top: 0;
  bottom: 0;
  padding-left: ${({ position }) => (position === 'left' ? '8px' : '0')};
  padding-right: ${({ position }) => (position === 'right' ? '8px' : '0')};
  left: ${({ position }) => (position === 'left' ? '0' : 'auto')};
  right: ${({ position }) => (position === 'right' ? '0' : 'auto')};
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ position, theme }) =>
    position === 'right' && theme.colors.gray[3]};
  cursor: ${({ position }) => (position === 'right' ? 'pointer' : 'auto')};
`;
