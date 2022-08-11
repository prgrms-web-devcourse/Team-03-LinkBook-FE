import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: fit-content;
`;

export const Button = styled.button<{ isClicked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({ theme, isClicked }) =>
    !isClicked
      ? `linear-gradient(to left, ${theme.colors.gray[3]} 50%, ${theme.colors.main[0]} 50%)`
      : theme.colors.main[0]};
  background-size: 200%;
  background-position: right;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background-position: left;
  }
`;

export const Description = styled.div<{ isClicked: boolean }>`
  width: fit-content;
  margin: 0 auto;
  color: ${({ theme, isClicked }) =>
    !isClicked ? theme.colors.gray[3] : theme.colors.main[0]};
  font-size: ${({ theme }) => theme.fontSize.b[2]};
`;
