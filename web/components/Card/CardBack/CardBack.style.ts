import styled from '@emotion/styled';

interface Props {
  version?: string;
  reverseCard?: boolean;
}

export const Card = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 300px;
  height: 403px;
  border-radius: 10px;
  padding: 16px 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  transition-duration: 1s;
  transform: ${({reverseCard}) => reverseCard ? 'rotateY(0)' : 'rotateY(-180deg)'};
  backface-visibility: hidden;
`;

export const IconWrapper = styled.div`
  display: inline;
  cursor: pointer;
`

export const BookmarkList = styled.ul`
  height: 340px;
  padding-top: 8px;
  overflow: auto;
  /* 스크롤바 전체 */
  &::-webkit-scrollbar {
    width: 8px;
  }
  /* 스크롤 막대 */
  &::-webkit-scrollbar-thumb {
    height: 30%;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.gray[4]};
  }
`

export const Bookmark = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray[5]};
  }
`

export const TextWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
