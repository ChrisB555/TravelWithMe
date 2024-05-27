import useFetchData from "../../hooks/useFetchData";
import { HomeBtn, Option, Select, SelectContainer } from "./MainHome.style";
import { useState } from "react";

function SelectOptionExplore() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [clicked, setClicked] = useState(false);

  const url = selectedCountry
    ? `http://localhost:3001/${selectedCountry}`
    : null;

  const { data, error, loading } = useFetchData(url, clicked, setClicked);
  

  const handleDropdownChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);
  };

  return (
    <>
      <SelectContainer >
        <form onSubmit={(e) => handleSubmit(e)}>
         
            <Select
              value={selectedCountry}
              onChange={handleDropdownChange}
            
            >
              <Option value="">
                Pick a country
              </Option>
              <Option value="italy">
                Italy
              </Option>
              <Option  value="france">
                France
              </Option>
              <Option  value="romania">
                Romania
              </Option>
              <Option  value="spain">
                Spain
              </Option>
            </Select>
         
          <HomeBtn type="submit">Let's Begin To Travel!</HomeBtn>
        </form>
       
      </SelectContainer>
   
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && console.log(data)}
    </>
  );
}

export default SelectOptionExplore;