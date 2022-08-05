import styled from '@emotion/styled';
import { Button } from '../../../../components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding-top: 100px;
  padding-bottom: 170px;
`;

export const Header = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l[1]};
  font-weight: 700;
  text-align: center;
  line-height: 52px;

  & > span {
    font-size: inherit;
  }
`;

export const StyledButton = styled(Button)`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px;
`;
