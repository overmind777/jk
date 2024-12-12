import styled from "styled-components";
import ReactModal from "react-modal";

export const ReactModalStyled = styled(ReactModal)`
    position: relative;
    padding: 30px;
    border-radius: 10px;
    background: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 500px;
    top: 0;
    left: 0;
    transform: translate(50%, 50%);
    z-index: 1000;
`
