import styled from '@emotion/styled';

interface Props {
  inputResultVisible: boolean;
}

export const List = styled.ul<Props>`
  display: ${({inputResultVisible}) => inputResultVisible ? 'block' : 'none'};
  max-height: 144px;
  overflow: auto;
  padding: 8px 14px;
  border: 1px solid ${(props) => props.theme.colors.gray[4]};
  border-radius: 0 0 6px 6px;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    height: 30%;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.gray[4]};
  }
`

export const Item = styled.li`
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.gray[5]};
  }
`