import MainHome from "../MainHome/MainHome";
import MainButtons from '../MainHome/MainButtons';
import { HomeContainer,  HomeText } from "./Home.style";

function Home() {
  return (
    <HomeContainer>     
         <MainHome/>
         <MainButtons/>
         <HomeText>Let's Begin To Travel!</HomeText>
    </HomeContainer>
    
  );
}

export default Home;