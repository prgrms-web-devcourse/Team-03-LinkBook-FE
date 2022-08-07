import styled from "@emotion/styled";

// Modal Component
export const Container = styled.div`
  position: fixed;
  top: calc(50% - 125px);
  left: calc(50% - 120px);
  z-index: 30;
  width: 240;
  height: 250px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 15px;
  animation: modalShow 0.3s;

  @keyframes modalShow {
    from {
      margin-top: -50px;
      opacity: 0;
    }
    to {
      margin-top: 0;
      opacity: 1;
    }
  }
`;

export const Dim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  animation: modalBgShow 0.3s;

  @keyframes modalBgShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
