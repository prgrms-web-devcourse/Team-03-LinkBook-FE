import styled from '@emotion/styled';

interface Props {
  active?: boolean;
  visible?: boolean;
  idx?: number;
}

export const Container = styled.div`
  width: 100%;
  height: 350px;
  margin-bottom: 50px;
  background: url('/backgrounds/myFoldersAreaLogout.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Header = styled.div`
  width: 1100px;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSize.h[0]};
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
`;

export const MainTagList = styled.ul`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 250px);
  grid-template-areas:
    'child1 . . .'
    'child2 child3 child4 child5'
    'child6 child7 child8 child9'
    'child10 child11 child12 child13';
  justify-content: center;
  gap: 10px;
  padding: 50px 0;
`;

export const TagContainer = styled.div<Props>`
  grid-area: ${({ idx }) => `child${idx}`};
`;

export const IconWrapper = styled.div`
  display: none;
  width: fit-content;
  color: ${({ theme }) => theme.colors.gray[3]};
  font-size: ${({ theme }) => theme.fontSize.c[1]};
`;

export const MainTag = styled.li<Props>`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.gray[5] : theme.colors.white[0]};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[5]};
    ${IconWrapper} {
      display: block;
    }
  }
`;

export const SubTagList = styled.ul<Props>`
  display: ${({ visible }) => (visible ? 'block' : 'hidden')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  z-index: ${({ visible }) => !visible && -1};
  position: absolute;
  overflow: auto;
  width: 250px;
  max-height: ${({ visible }) => (visible ? '135px' : '0px')};
  padding: 8px 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray[5]};
  border-top: none;
  border-radius: 0 0 6px 6px;
  background-color: ${({ theme }) => theme.colors.white[0]};
  font-family: 'Noto Sans KR', sans-serif;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 10px -3px;
  transition: max-height 0.2s;

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
  transition: all 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[5]};
  }
`;
