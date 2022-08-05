import styled from '@emotion/styled';

export const InputBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  height: 54px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[3]};
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputBar = styled.input`
  width: 440px;
  height: 54px;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[3]};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray[2]};
`;

export const SearchIconWrapper = styled.div`
  cursor: pointer;
`;
