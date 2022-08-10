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

export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.b[1]};
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
`;

export const TagWrapper = styled.div`
  margin: 5px 5px 10px 5px;
`;

export const ImageWrapper = styled.div`
  max-width: 1200px;
  overflow: hidden;
  border-radius: 5px;
`;

export const Description = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 50px auto;
  color: ${({ theme }) => theme.colors.gray[0]};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.b[0]};
`;

export const BookmarksContainer = styled.div``;

export const ProfileWrapper = styled.div`
  width: 100%;
  margin: 50px auto 20px auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  width: fit-content;
  margin: 0 auto;
`;

export const SubTitle = styled.h2`
  width: 100%;
  max-width: 1080px;
  margin: 20px auto;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h[1]};
`;
