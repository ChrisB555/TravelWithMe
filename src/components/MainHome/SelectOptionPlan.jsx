import { SelectContainer, Select, Option ,HomeBtn } from "./MainHome.style";

function SelectOptionPlan() {
  return (
    <>
      <SelectContainer>
        <Select>
          <Option value="country">Countries</Option>
          <Option value="italy">Italy</Option>
          <Option value="france">France</Option>
          <Option value="romania">Romania</Option>
          <Option value="spain">Spain</Option>
        </Select>
        <Select>
          <Option value="cityRegion">Cities/Regions</Option>
          <Option value="city">Cities</Option>
          <Option value="region">Regions</Option>
        </Select>
      </SelectContainer>
      <HomeBtn>Let's Begin To Travel!</HomeBtn>
    </>
  );
}

export default SelectOptionPlan;
