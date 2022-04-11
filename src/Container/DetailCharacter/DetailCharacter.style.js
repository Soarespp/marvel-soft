import styled from "styled-components";

export const DetailContainer = styled.div`
    grid-template-columns: repeat(auto-fill, minmax(300px, 45%));
     grid-template-rows: minmax(150px, 100%);
    // Height:200px;
    display: grid;
    margin: auto;
    max-width: 1200px;
    border: 3px groove rgb(191, 6, 3);
    border-radius: 3px;
    grid-gap: 5px;
`;

export const ContainerImg = styled.div`
    width: 100%;
    height: 100%;
    min-width: 150px;
    min-Height: 300px;
    align-items: center;
    align-content: center;
    text-align: center;
    margin: auto;
`;