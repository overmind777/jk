import styled from "styled-components";
import ReactModal from "react-modal";

export const WrapperStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 23, 23, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ReactModalStyled = styled(ReactModal)`
    background-color: #1c1c1c;
    width: 400px;
    height: 400px;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    z-index: 1000;
`
