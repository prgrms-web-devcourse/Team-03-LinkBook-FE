import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: fit-content;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.gray[4]};
  border: none;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[3]};
  }
`;

export const Description = styled.div`
  width: fit-content;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.gray[3]};
  font-size: ${({ theme }) => theme.fontSize.b[2]};
`;
