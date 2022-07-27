import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  height: 180px;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h[1]};
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 45px;
  margin-right: 20px;
  font-family: 'Noto Sans KR', sans-serif;
`;

export const Strong = styled.span`
  width: 100px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.b[1]};
`;

export const Plane = styled.span`
  color: ${({ theme }) => theme.colors.gray[2]};
  font-size: ${({ theme }) => theme.fontSize.b[1]};
`;
