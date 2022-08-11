import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.h1`
  padding: 5px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.t[0]};
`;

export const ImageWrapper = styled.div`
  max-width: 1200px;
  overflow: hidden;
  border-radius: 5px;
`;
