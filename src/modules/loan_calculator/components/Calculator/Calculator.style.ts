import styled from "styled-components";

export const LoadingWrapper = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background-color: white;
    z-index: 2;
    opacity: 0.8;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 416px;
    width: 500px;
    height: 200px;
    position: relative;

    & > * {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        justify-content: center;
        /* align-items: center; */
    }
`;
