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
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.t[0]};
`;

export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.b[1]};
`;

export const ProfileItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
`;

export const TagItems = styled.div`
  margin: 5px 5px 10px 5px;
`;

export const ImageContainer = styled.div`
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

export const ProfileContainer = styled.div`
  width: 100%;
  margin: 50px auto 20px auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  width: fit-content;
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
  color: ${({ theme }) => theme.colors.gray[3]};
  font-size: ${({ theme }) => theme.fontSize.b[2]};
`;

export const NotClickedButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.gray[4]};
  border: none;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[3]};
  }
`;

export const MyContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PublicTag = styled.div`
  max-width: 70px;
  height: 28px;
  margin-bottom: 5px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.gray[3]};
  text-align: center;
  border: 1px solid;
  border-radius: 20px;
`;

export const MyButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[3]};
  font-size: ${({ theme }) => theme.fontSize.b[1]};
`;

export const ButtonUpdateDelete = styled.button`
  color: ${({ theme }) => theme.colors.gray[1]};
  font-size: ${({ theme }) => theme.fontSize.b[1]};
  background-color: transparent;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[5]};
  }
`;

// Comment
export const CommentContainer = styled.div``;

export const SubTitle = styled.h2`
  width: 100%;
  max-width: 1080px;
  margin: 20px auto;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h[1]};
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
  width: 100%;
  max-width: 1150px;
  margin: 20px auto;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h[1]};
`;
