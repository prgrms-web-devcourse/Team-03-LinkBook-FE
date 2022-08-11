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
  background-color: ${({ theme, isClicked }) =>
    !isClicked ? theme.colors.gray[4] : theme.colors.main[0]};
  border: none;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[3]};
  }
`;

export const Description = styled.div<{ isClicked: boolean }>`
  width: fit-content;
  margin: 0 auto;
  color: ${({ theme, isClicked }) =>
    !isClicked ? theme.colors.gray[3] : theme.colors.main[0]};
  font-size: ${({ theme }) => theme.fontSize.b[2]};
`;
