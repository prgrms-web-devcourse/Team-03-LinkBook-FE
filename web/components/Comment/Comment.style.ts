import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 1100px;
  height: fit-content;
  padding: 15px 20px;
  font-family: 'Noto Sans KR', sans-serif;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray[5]}`};
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const CommentContainer = styled.div`
  width: 100%;
  height: auto;
  max-height: 100px;
  line-height: 1.4;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const RepliesButton = styled.button`
  width: fit-content;
  padding: 3px 8px;
  color: ${({ theme }) => theme.colors.main[0]};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.b[2]};
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[5]};
  }
`;

export const RepliesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: auto;
  margin-left: 30px;
`;

export const ReplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 1100px;
  height: fit-content;
  padding: 10px;
`;

export const Line = styled.hr`
  height: 1px;
  margin: 10px 0 0 0;
  background-color: ${({ theme }) => theme.colors.gray[5]};
  border: 0px;
`;
