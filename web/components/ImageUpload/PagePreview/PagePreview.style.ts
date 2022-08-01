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

export const UploadText = styled(Text)`
  color: ${({ theme }) => theme.colors.white[0]};
  font-size: ${({ theme }) => theme.fontSize.h[1]};
  font-weight: 700;
`;
