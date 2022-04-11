import styled from "styled-components";

export const HomeStyle = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1200px;
`;

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-gap: 15px;
`;

export const CardList = styled.div`
  border: 3px groove rgb(191, 6, 3);
  border-radius: 3px;
  margin:3px;
  text-align: center;
  align-items: center;
  align-content: center;
  display: inlinne
`;

export const Loading = styled.div`
  width: 90%; 
  height: 200px; 
  margin: auto;
  max-Width: 1000px;
  align-Items: center; 
  text-Align: center;
  justify-Content: center; 
  align-Content: center;
`;

export const Button = styled.div`
  width: 80px; 
  margin: auto;
`;