import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 70px;
  height: 28px;
  max-height: 28px;
  padding: 5px 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[3]};
  border: 1px solid;
  border-radius: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.gray[4]};
  font-size: ${({ theme }) => theme.fontSize.b[2]};
`;

export const UpdateButton = styled.button`
  color: ${({ theme }) => theme.colors.gray[1]};
  font-size: ${({ theme }) => theme.fontSize.b[1]};
  background-color: transparent;
  padding: 4px 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[5]};
  }
`;
