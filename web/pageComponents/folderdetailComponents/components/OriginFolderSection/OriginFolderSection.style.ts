import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  width: fit-content;
  padding: 5px;
  color: ${({ theme }) => theme.colors.gray[2]};
`;

export const Description = styled.span`
  font-size: ${({ theme }) => theme.fontSize.b[1]};
`;

export const Origin = styled.span`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.h[2]};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
