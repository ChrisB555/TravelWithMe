import { SelectContainer, Select, Option, HomeBtn } from "./MainHome.style";

function SelectOptionExplore() {
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
      </SelectContainer>
      <HomeBtn>Let's Begin To Travel!</HomeBtn>
    </>
  );
}

export default SelectOptionExplore;