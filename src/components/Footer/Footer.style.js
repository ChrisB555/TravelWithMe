import styled from "styled-components";


export const FooterContainer = styled.div`
 margin-top:50px;
  padding: 16px 0;
  background: #020106;
  color: white;
  width: 100%;
  gap: 16px;
  flex-wrap: wrap;
  display: flex;
  justify-content:space-between;
  @media screen and (max-width: 820px) {
    flex-direction:column;
  }
`;

export const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:left;

`;

export const FooterInfo = styled.p`
 margin:5px;
 @media screen and (max-width: 820px) {
   font-size:12px;
  }
`;

export const Copyrights = styled.p`
 margin:3px;
 @media screen and (max-width: 820px) {
  font-size:10px;
  margin-top:20px;
  }
`;