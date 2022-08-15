import styled from '@emotion/styled';
import { Input, Button } from '../../components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 80px auto;
  gap: 24px;
`;

export const SwitchContainer = styled.div`
  display: flex;

  gap: 16px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;

export const TitleInput = styled(Input)`
  margin-top: -16px;
  font-size: ${({ theme }) => theme.fontSize.t[0]};
  font-weight: 700;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray[3]};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  gap: 16px;
`;

export const BookmarkButton = styled(Button)`
  width: 160px;
  color: ${({ theme }) => theme.colors.gray[3]};
  background-color: ${({ theme }) => theme.colors.white[0]};
  border: 1px solid ${({ theme }) => theme.colors.gray[3]}; ;
`;
