import { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import useFetchDataCity from "../../hooks/useFetchDataCity";
import useFetchDataRegion from "../../hooks/useFetchDataRegion";
import { HomeBtn, Option, SelectPlan, SelectContainer } from "./MainHome.style";
import CitiesRegions from "./CitiesRegions/CitiesRegions";

function SelectOptionPlan() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [clicked, setClicked] = useState(false);

  const url = selectedCountry
    ? `http://localhost:3001/${selectedCountry}`
    : null;

  const urlCity = selectedCity ? `http://localhost:3001/${selectedCity}` : null;

  const urlRegion = selectedRegion
    ? `http://localhost:3001/${selectedRegion}`
    : null;

  const { data, error, loading } = useFetchData(url, clicked, setClicked);
  const { dataCity, errorCity, loadingCity } = useFetchDataCity(
    urlCity,
    clicked,
    setClicked
  );
  const { dataRegion, errorRegion, loadingRegion } = useFetchDataRegion(
    urlRegion,
    clicked,
    setClicked
  );

  const handleDropdownChange1 = (e) => {
    setSelectedCountry(e.target.value);
  };
  const handleDropdownChange2 = (e) => {
    setSelectedRegion
      ? setSelectedCity(e.target.value)
      : setSelectedRegion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);
  };
  console.log(url,urlCity,urlRegion);
console.log(data,dataCity,dataRegion);
console.log(selectedCountry,selectedCity,selectedRegion);
  return (
    <>
      <SelectContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <SelectPlan value={selectedCountry} onChange={handleDropdownChange1}>
            <Option value="">Pick a country</Option>
            <Option value="italy">Italy</Option>
            <Option value="france">France</Option>
            <Option value="romania">Romania</Option>
            <Option value="spain">Spain</Option>
          </SelectPlan>
          <SelectPlan value={selectedCity} onChange={handleDropdownChange2}>
            <Option value="">Pick a city/region</Option>
            <Option value="cities">Cities</Option>
            <Option value="regions">Regions</Option>
          </SelectPlan>
          <HomeBtn
            type="submit"
            to={`/my-travel/${selectedCountry}/${selectedCity}${selectedRegion}`}
            data={data}
            dataCity={dataCity}
            dataRegion={dataRegion}
        
          >
            Let's Begin To Travel!
          </HomeBtn>
        </form>
      
{ console.log(data,dataCity,dataRegion) }
        <CitiesRegions
          data={data}
          dataCity={dataCity}
          dataRegion={dataRegion}
        />
      </SelectContainer>
      {data && console.log(data)}
      {loading && <div>Loading...</div>}
      {loadingCity && <div>Loading...</div>}
      {loadingRegion && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {errorCity && <div>Error: {errorCity.message}</div>}
      {errorRegion && <div>Error: {errorRegion.message}</div>}
    </>
  );
}

export default SelectOptionPlan;
