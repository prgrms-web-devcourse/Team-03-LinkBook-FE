import styled from '@emotion/styled';

export const NotFoundContainer = styled.div`
  width: 100%;
  height: auto;
  font-size: ${({ theme }) => theme.fontSize.h[0]};
  font-family: 'Noto Sans KR', sans-serif;
`;

export const NotFoundInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
  margin: 200px auto;
`;

export const WhaleWrapper = styled.div`
  width: 200px;
  height: 200px;
  background: url('/backgrounds/whale1.svg');
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.main[0]};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h[1]};
  text-align: center;
`;

export const Description = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.b[1]};
  text-align: center;
`;

export const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
`;
