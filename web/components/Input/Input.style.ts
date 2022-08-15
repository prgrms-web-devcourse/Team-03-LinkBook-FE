import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[4]};
  padding: 8px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.h[2]};
  border: none;

  &:focus {
    outline: none;
  }
`;

export const Action = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding-right: 8px;
  padding-bottom: 8px;
`;

export const ErrorText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.c[0]};
  color: red;
  margin: 5px;
`;
