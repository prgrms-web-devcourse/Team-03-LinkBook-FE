import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1100px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin: 170px auto 100px auto;
  font-family: 'Noto Sans KR', sans-serif;
`;

export const Line = styled.hr`
  height: 1px;
  margin: 10px 0 0 0;
  background-color: ${({ theme }) => theme.colors.gray[5]};
  border: 0px;
`;
