import styled from '@emotion/styled';
import { Text } from '../../../../components';

interface Props {
  active?: boolean;
  visible?: boolean;
  idx?: number;
}

export const Container = styled.div`
  width: 1100px;
`;

export const Header = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.h[0]};
  font-weight: bold;
`;

export const MainTagList = styled.ul`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 235px);
  grid-template-areas:
    'child1 . . .'
    'child2 child3 child4 child5'
    'child6 child7 child8 child9'
    'child10 child11 child12 child13';
  justify-content: center;
  gap: 10px;
  padding: 50px 0;
`;

export const TagConatiner = styled.div<Props>`
  grid-area: ${({ idx }) => `child${idx}`};
`;

export const MainTag = styled.li<Props>`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray[3]};
  border-radius: 6px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.gray[5] : theme.colors.white[0]};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[5]};
  }
`;

export const SubTagList = styled.ul<Props>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: absolute;
  overflow: auto;
  width: 235px;
  max-height: 145px;
  padding: 8px 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray[4]};
  border-top: none;
  border-radius: 0 0 6px 6px;
  background-color: ${({ theme }) => theme.colors.white[0]};

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    height: 30%;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.gray[4]};
  }
`;

export const SubTag = styled.li`
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[5]};
  }
`;
