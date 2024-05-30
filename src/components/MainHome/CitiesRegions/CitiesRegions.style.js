import styled from "styled-components";
import { DARK_BLUE, ORANGE, WHITE_NEUTRAL } from "../../../constants/Colors";

export const PageContainer = styled.div`
        display:flex;
        flex-direction:row;
        justify-content:space-evenly;
`;

export const FiltersContainer = styled.div`

        display:flex;
        flex-direction:column;
        width:30%;
        border-right:2px solid ${WHITE_NEUTRAL};
        height:400px;
`;

export const MainContainer =  styled.div`

display:flex;
flex-direction:column;
width:60%;
`;

export const Text = styled.h4`

    color:${WHITE_NEUTRAL};

`;

export const DataContainer =  styled.div`

display:flex;
flex-direction:row;
justify-content:space-between;
border:none;
`;
export const ImgContainer = styled.img`

    width:300px;
    height:300px;

`;
export const TextContainer = styled.p`

   margin:20px;
   font-size:16px;
   color:${WHITE_NEUTRAL};
`;




