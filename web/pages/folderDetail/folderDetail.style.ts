import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin: 170px auto 100px auto;
  font-family: 'Noto Sans KR', sans-serif;
`;

// Content
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  padding: 5px;
  font-size: ${({ theme }) => theme.fontSize.t[0]};
  font-weight: bold;
`;

export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.b[1]};
`;

export const ProfileItems = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TagItems = styled.div``;

export const ImageContainer = styled.div`
  max-width: 1200px;
  overflow: hidden;
  border-radius: 5px;
`;

export const Description = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 50px auto;
  color: ${({ theme }) => theme.colors.gray[0]};
  font-size: ${({ theme }) => theme.fontSize.b[0]};
  font-weight: 500;
`;

export const BookmarksContainer = styled.div``;

export const ProfileContainer = styled.div`
  width: 100%;
  margin: 50px auto 20px auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: fit-content;
  gap: 10px;
  margin: 0 auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ButtonDescription = styled.div`
  width: fit-content;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSize.b[2]};
  color: ${({ theme }) => theme.colors.gray[3]};
`;

export const NotClickedButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.gray[4]};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[3]};
  }
`;

// Comment
export const CommentContainer = styled.div``;

export const SubTitle = styled.h2`
  max-width: 1080px;
  width: 100%;
  margin: 20px auto;
  font-size: ${({ theme }) => theme.fontSize.h[1]};
  font-weight: bold;
`;

export const Line = styled.hr`
  height: 1px;
  margin: 10px 0 0 0;
  background-color: ${({ theme }) => theme.colors.gray[5]};
  border: 0px;
`;

export const CommentInputContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const CommentTitle = styled.h2`
  max-width: 1150px;
  width: 100%;
  margin: 20px auto;
  font-size: ${({ theme }) => theme.fontSize.h[1]};
  font-weight: bold;
`;
