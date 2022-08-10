import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Tag = styled.div`
  max-width: 70px;
  height: 28px;
  margin-bottom: 5px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.gray[3]};
  text-align: center;
  border: 1px solid;
  border-radius: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[3]};
  font-size: ${({ theme }) => theme.fontSize.b[1]};
`;

export const UpdateButton = styled.button`
  color: ${({ theme }) => theme.colors.gray[1]};
  font-size: ${({ theme }) => theme.fontSize.b[1]};
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[5]};
  }
`;
