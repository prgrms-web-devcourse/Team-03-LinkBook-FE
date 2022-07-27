import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[3]};
  padding: 8px;
`
export const Input = styled.input`
  width: 100%;
  border: none;

  &:focus{
    outline: none;
  }
`;

export const Action = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  padding-bottom: 8px;
  padding-right: 8px;
`
