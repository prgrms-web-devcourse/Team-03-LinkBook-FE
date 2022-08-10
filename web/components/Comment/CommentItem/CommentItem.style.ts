import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  height: auto;
  max-height: 100px;
  line-height: 1.4;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[3]};
  font-size: ${({ theme }) => theme.fontSize.c[0]};
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.gray[1]};
  font-size: ${({ theme }) => theme.fontSize.b[2]};
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[5]};
  }
`;
