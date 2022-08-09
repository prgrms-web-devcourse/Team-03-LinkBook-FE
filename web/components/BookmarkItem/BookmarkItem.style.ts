import styled from '@emotion/styled';
import { Text } from '..';

export const BookmarkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  padding: 13px 21px;
  border: 1px solid ${({ theme }) => theme.colors.gray[5]};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[5]};
  }
`;

export const BookmarkItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const BookmarkTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[4]};
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[4]};
    border-radius: 50%;
  }
`;

export const UpdateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Line = styled.div`
  font-size: ${({ theme }) => theme.fontSize.b[0]};
  color: ${({ theme }) => theme.colors.gray[2]};
`;
