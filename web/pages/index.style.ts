import styled from '@emotion/styled';

export const NotFoundContainer = styled.div`
  max-width: 1200px;
  margin: 200px;

  font-size: ${({ theme }) => theme.fontSize.h[0]};
`;

export const Div = styled.div`
  width: fit-content;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.black};
`;
