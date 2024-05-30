import { Link } from "react-router-dom";
import styled from "styled-components";
import { DARK_BLUE, ORANGE, WHITE_NEUTRAL } from "../../constants/Colors";

export const MainContainer = styled.div`
  display: grid;
  height: 450px;
  grid-template-columns: 0fr 0fr 0fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1px;
  margin: 10px auto;

  @media screen and (max-width: 820px) {
    grid-gap: 1px;
    height: 100px;
  }
`;

export const MainHomeGalleryItem = styled.img`
  width: 220px;
  height: auto;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 820px) {
    width: 70px;
  }
`;

export const ButtonsContainer = styled.div`
  margin: 30px auto;
  position: relative;
`;

export const Buttons = styled.button`
  width: 200px;
  height: 40px;
  font-weight: 700;
  font-size: 20px;
  color: ${DARK_BLUE};
  margin: 0 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
  }
  @media screen and (max-width: 820px) {
    margin-top: 20px;
    width: 70%;
    height: 25px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  position: absolute;
  border-radius: 8px;
  margin: 30px auto;
`;
export const Select = styled.select`
  width: 100%;
  height: 35px;
  border-radius: 8px;
  margin: 0 auto;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
`;
export const SelectPlan = styled.select`
  width: 40%;
  height: 35px;
  border-radius: 8px;
  margin: 10px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
`;

export const Option = styled.option`
  font-weight: 700;
  font-size: 20px;
`;

export const HomeBtn = styled(Link)`
  width: 65%;
  height: 40px;
  font-weight: 700;
  font-size: 20px;
  color: ${ORANGE};
  margin:  20px auto;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
  }
  @media screen and (max-width: 820px) {
    margin-top: 20px;
    width: 70%;
    height: 25px;
  }
`;
export const FormBody = styled.form`
  display: flex;
  flex-direction: column;
`;
export const LabelHead = styled.label`
  color: ${WHITE_NEUTRAL};
  font-weight: 700;
  font-size: 20px;
  height: auto;
  margin: 10px 0 10px 0;
`;