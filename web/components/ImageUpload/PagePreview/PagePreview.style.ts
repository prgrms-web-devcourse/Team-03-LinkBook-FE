import styled from '@emotion/styled';
import Image from 'next/image';
import { Button, Text } from '../..';

export const PreviewImage = styled(Image)`
  background-color: ${({ theme }) => theme.colors.white[0]};
  object-fit: contain;
`;

export const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const UploadButton = styled(Button)`
  width: 100%;
  padding: 29px;
  color: ${({ theme }) => theme.colors.gray[3]};
  background-color: ${({ theme }) => theme.colors.white[0]};
  box-shadow: 1px 6px 2px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
`;

export const UploadText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[3]};
`;
