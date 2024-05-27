import useFetchData from "../../hooks/useFetchData";
import { HomeBtn, Option, SelectPlan, SelectContainer } from "./MainHome.style";
import Cities from "./Cities/Cities";
import { useState } from "react";

function SelectOptionExplore() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCityRegion, setSelectedCityRegion] = useState("");
  const [clicked, setClicked] = useState(false);

  const url =  selectedCountry
  ? `http://localhost:3001/${selectedCountry}`
  : null;
 console.log(url);

const { data, error, loading } = useFetchData(url,clicked,setClicked);
  console.log(selectedCountry,selectedCityRegion,data,error)

  const handleDropdownChange1 = (e) => {
    setSelectedCountry(e.target.value);
  };
  const handleDropdownChange2 = (e) => {
    setSelectedCityRegion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);
  };

  return (
    <>
      <SelectContainer >
        <form onSubmit={(e) => handleSubmit(e)}>
            <SelectPlan
              value={selectedCountry}
              onChange={handleDropdownChange1}     
            >
              <Option  value="">
                Pick a country
              </Option>
              <Option  value="italy">
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
            </SelectPlan>
            <SelectPlan
              value={selectedCityRegion}
              onChange={handleDropdownChange2}             
            >
              <Option value="">
                Pick a city/region
              </Option>
              <Option  value="cities">
                Cities
              </Option>
              <Option value="regions">
                Regions
              </Option>        
            </SelectPlan>      
          <HomeBtn type="submit">Let's Begin To Travel!</HomeBtn>
        </form>  

        <Cities selectedCountry={selectedCountry} selectedCityRegion={selectedCityRegion} data={data}/> 
      </SelectContainer>
    {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && console.log(data)}
    </>
  );
}

export default SelectOptionExplore;