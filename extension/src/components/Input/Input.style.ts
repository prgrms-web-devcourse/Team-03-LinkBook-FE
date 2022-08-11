import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  border-bottom: 2px solid #e0e0e0;
  padding: 8px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: "15px";
  border: none;

  &:focus {
    outline: none;
  }
`;

export const Action = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  padding-right: 8px;
  padding-bottom: 8px;
`;
