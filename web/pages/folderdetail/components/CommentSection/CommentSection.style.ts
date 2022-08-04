import styled from '@emotion/styled';

export const Container = styled.div``;

export const Title = styled.h2`
  width: 100%;
  max-width: 1150px;
  margin: 20px auto;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h[1]};
`;
