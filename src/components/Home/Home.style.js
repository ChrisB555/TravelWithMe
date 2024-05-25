import styled from "styled-components";
import { WHITE_NEUTRAL } from "../../constants/Colors";

export const HomeContainer = styled.div`
  padding: 10px;
  display:flex;
  flex-direction:column;
`;


export const HomeText = styled.h2`
color:${WHITE_NEUTRAL};
@media screen and (max-width: 820px) {
    text-align:center;
    font-size:18px;
  }
`;