import { useState } from "react";
import { Buttons, ButtonsContainer } from "./MainHome.style";
import SelectOptionPlan from "./SelectOptionPlan";
import SelectOptionExplore from "./SelectOptionExplore";

function MainButtons() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const handleClickExplore = () => {
    setIsVisible1(!isVisible1);
  };
  const handleClickPlan = () => {
    setIsVisible2(!isVisible2);
  };

  return (
    <>
      <ButtonsContainer>
        <Buttons onClick={() => handleClickExplore()}>I Want To Explore</Buttons>
        <Buttons onClick={() => handleClickPlan()}>Help me Plan</Buttons>
        {isVisible1 && <SelectOptionExplore /> }
        {isVisible2 && <SelectOptionPlan /> }
       
      </ButtonsContainer>
    
    </>
  );
}

export default MainButtons;
