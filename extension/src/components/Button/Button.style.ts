import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  outline: 0;
  appearance: none;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  color: #ffffff;

  &:hover {
    transition: 0.25s;
    box-shadow: 0 0.5em 0.5em -0.4em #bdbdbd;
    transform: translateY(-0.25em);
  }
  &:active {
    transition: all 0.2s;
    transform: scale(0.95);
  }
`;
