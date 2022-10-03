import styled from '@emotion/styled';

interface Props {
  inputResultVisible?: boolean;
  active?: boolean;
  isDefault?: boolean;
}

export const List = styled.ul<Props>`
  display: ${({ inputResultVisible }) =>
    inputResultVisible ? 'block' : 'none'};
  max-height: 144px;
  overflow: auto;
  padding: 8px 14px;
  border: 1px solid ${(props) => props.theme.colors.gray[4]};
  border-radius: 0 0 6px 6px;
  overscroll-behavior-y: contain;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    height: 30%;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.gray[4]};
  }
`;

export const Item = styled.li<Props>`
  padding: 8px;
  border-radius: 8px;
  cursor: ${({ isDefault }) => (isDefault ? 'auto' : 'pointer')};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.gray[5] : theme.colors.white[0]};

  &:hover {
    background-color: ${({ theme, isDefault }) =>
      isDefault ? theme.colors.white[0] : theme.colors.gray[5]};
  }
`;
