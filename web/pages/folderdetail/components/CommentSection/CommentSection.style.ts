import styled from '@emotion/styled';

export const Container = styled.div``;

export const SubTitle = styled.h2`
  width: 100%;
  max-width: 1080px;
  margin: 20px auto;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h[1]};
`;

export const CommentInputContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const CommentTitle = styled.h2`
  width: 100%;
  max-width: 1150px;
  margin: 20px auto;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h[1]};
`;
