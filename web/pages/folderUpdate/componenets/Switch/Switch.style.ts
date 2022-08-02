import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  checked: boolean;
}

const Transition = () => css`
  transition: All 0.3s ease;
  -webkit-transition: All 0.3s ease;
  -moz-transition: All 0.3s ease;
  -o-transition: All 0.3s ease;
`;

export const SwitchWrapper = styled.div`
  position: relative;
  display: block;
  width: 96px;
  height: 32px;
  margin: 0 10px 10px 0;
  border-radius: 18px;
  cursor: pointer;
  ${Transition}
`;

export const SwitchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;

const CheckedSpan = ({ theme }: ThemeProps) => css`
  background: ${theme.colors.main[0]};
  :before {
    opacity: 0;
  }
  :after {
    opacity: 1;
  }
`;

export const SwitchLabel = styled.span`
  position: relative;
  display: block;
  height: inherit;
  font-size: ${({ theme }) => theme.fontSize.b[2]};
  font-weight: 500;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.gray[3]};
  border-radius: inherit;
  &::before,
  ::after {
    position: absolute;
    top: 50%;
    margin-top: -0.5em;
    line-height: 1;
    color: ${({ theme }) => theme.colors.white[0]};
    -webkit-transition: inherit;
    -moz-transition: inherit;
    -o-transition: inherit;
    transition: inherit;
  }

  &::before {
    content: attr(data-on);
    right: 11px;
  }

  &::after {
    content: attr(data-off);
    left: 11px;
    opacity: 0;
  }

  ${({ checked }: Props) => checked && CheckedSpan};
`;

const CheckedHandler = () => css`
  left: 68px;
  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);
`;

export const SwitchHandler = styled.span`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 24px;
  height: 24px;
  background: linear-gradient(to bottom, #ffffff 40%, #f0f0f0);
  background-image: -webkit-linear-gradient(top, #ffffff 40%, #f0f0f0);
  border-radius: 100%;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -6px 0 0 -6px;
    width: 12px;
    height: 12px;
    background: linear-gradient(to bottom, #eeeeee, #ffffff);
    background-image: -webkit-linear-gradient(top, #eeeeee, #ffffff);
    border-radius: 6px;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.02);
  }

  ${Transition}
  ${({ checked }: Props) => checked && CheckedHandler}
`;
