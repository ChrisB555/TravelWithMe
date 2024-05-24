//import {Link} from "react-router-dom";
import styled from "styled-components";


export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-top:5px;
  margin-left:20px;
  border-radius: 50%;
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  vertical-align: middle;
  background-color: #020106;
  color: white;
  width: 100%;
  height: 60px;
  margin-bottom:50px;
`;

export const LinkNavStyle = styled.div`
  text-decoration: none;
  cursor: pointer;
  color: white;
  padding: 8px ;
  margin:10px ;
  border-radius:4px;
  &:hover {
    background: white;
    color: #020106;
    border-radius: 0;
  }
  @media screen and (max-width: 820px) {
    color:#020106;
    margin:0 auto;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  width: 90%;
  margin:30px auto;

`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 60px;
  right: 0;
  display: none;
  border-radius:8px;

  @media screen and (max-width: 820px) {
    display: block;
  }
`;

export const LinkContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 100%;
  font-size:18px;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const ButtonDropdown = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  color: white;
  display: none;
  padding:0px;
  margin:10px;
  border:none;
  
  @media screen and (max-width: 820px) {
    display: block;
  }
`;