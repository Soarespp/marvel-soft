import styled from "styled-components";

export const ImgDefault = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  min-width: 150px;
  min-height: 150px;
  background-image: url(${props => props.src});  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin:3px;
  margin: auto;
`;