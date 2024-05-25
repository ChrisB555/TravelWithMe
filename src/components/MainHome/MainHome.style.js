import styled from "styled-components";
import { DARK_BLUE, WHITE_NEUTRAL } from "../../constants/Colors";


export const MainContainer = styled.div`

  display: grid;
  height: 450px;
  grid-template-columns: 0fr 0fr 0fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap:1px;
  margin:10px auto;
 
  @media screen and (max-width: 820px) {
    grid-gap: 1px;
    height:100px;
  }
`;

export const MainHomeGalleryItem = styled.img`

  width: 220px;
  height: auto;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
  &:hover{
    transform: scale(1.05);
  }
  @media screen and (max-width: 820px) {
    width: 70px;
  }
`;

export const ButtonsContainer = styled.div`
margin:30px auto;

`;

export const Buttons = styled.button`

width:200px;
height:40px;
font-weight:700;
color: ${DARK_BLUE};
margin:0 10px;
cursor:pointer;
border-radius:5px;
&:hover {
    background:  ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border:solid 2px white;
  }
  @media screen and (max-width: 820px) {
   margin-top:20px;
   width:70%;
   height:25px;
  }
`;

