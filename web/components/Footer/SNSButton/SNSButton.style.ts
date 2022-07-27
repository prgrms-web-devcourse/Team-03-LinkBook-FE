import styled from '@emotion/styled';

export const Container = styled.button`
  display: flex;
  gap: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.h[2]};
`;
