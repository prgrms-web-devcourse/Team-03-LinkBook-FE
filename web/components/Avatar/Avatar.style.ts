import styled from '@emotion/styled';
import Image from 'next/image';

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const AvatarImg = styled(Image)`
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.gray[3]};
`;

export const AvatarName = styled.span`
  margin-left: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.c[0]};
`;
