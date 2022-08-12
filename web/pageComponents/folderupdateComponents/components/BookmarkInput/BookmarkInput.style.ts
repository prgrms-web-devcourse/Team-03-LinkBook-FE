import styled from '@emotion/styled';
import { Button } from '../../../../components';

export const BookmarkInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 16px 24px;
  gap: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray[3]};
  border-radius: 8px;
`;

export const BookmarkButton = styled(Button)`
  width: 160px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.gray[3]};
  background-color: ${({ theme }) => theme.colors.white[0]};
  border: 1px solid ${({ theme }) => theme.colors.gray[3]}; ;
`;
