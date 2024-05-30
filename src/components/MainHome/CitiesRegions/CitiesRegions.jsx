import { useState,useEffect } from "react";
import useFetchData from "../../../hooks/useFetchData";
import { useParams } from "react-router-dom";
import {
  PageContainer,
  FiltersContainer,
  MainContainer,
  Text,
  ImgContainer,
  TextContainer,
  DataContainer
} from "./CitiesRegions.style";
import "bootstrap/dist/css/bootstrap.css";
import { Dropdown } from "react-bootstrap";

function CitiesRegions({ dataCity }) {
  const { country, cityOrRegion } = useParams();
  const [cityRegion, setCityRegion] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const isCity = true;

  console.log("params", country, cityOrRegion);


  useEffect(() => {
    fetch( country && cityOrRegion
        ? `http://localhost:3001/${
            isCity ? "cities" : "regions"
          }?country=${country}?cityOrRegion=${cityOrRegion}`
        : null)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setCityRegion(data);
      
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
     
  }, [country,cityOrRegion]);
  console.log(cityRegion);
 
  console.log("dataCity", dataCity);
  
  return (
    <PageContainer>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {cityRegion && 
      <>
     
        <FiltersContainer>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:"70%",margin:"10px auto 30px"}}>
            Choose a city:
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:"70%",margin:"75px auto"}}>
            Choose a period:
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">3 days</Dropdown.Item>
              <Dropdown.Item href="#/action-2">5 days</Dropdown.Item>
              <Dropdown.Item href="#/action-3">7 days</Dropdown.Item>
              <Dropdown.Item href="#/action-3">10 days</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:"70%",margin:"35px auto 0"}}>
            Choose a buget:
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Low buget</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Medium buget</Dropdown.Item>
              <Dropdown.Item href="#/action-3">High buget</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </FiltersContainer>
        <MainContainer>
        <DataContainer>
            <ImgContainer  src={cityRegion.image}>
           
            </ImgContainer>
            <TextContainer>
                {cityRegion.description}
            </TextContainer>
        </DataContainer>
        </MainContainer>
        </>}
      </PageContainer>
   
  );
}

export default CitiesRegions;
