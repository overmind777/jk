import styled from "styled-components";

const Home = () => {
    return (
        <>
            <StyledH1>Home</StyledH1>
        </>
    );
};

export default Home;

export const StyledH1 = styled.h1`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`