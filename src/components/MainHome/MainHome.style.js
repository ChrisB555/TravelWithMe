import styled from "styled-components";


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
color: #020106;
margin:0 10px;
cursor:pointer;
border-radius:5px;
&:hover {
    background:#020106 ;
    color: white;
    border:solid 2px white;
  }
  @media screen and (max-width: 820px) {
   margin-top:20px;
   width:70%;
   height:25px;
  }
`;

