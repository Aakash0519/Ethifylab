import React from 'react';
import styled from 'styled-components'

const SingleCard = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  color:#5452F6;
  padding:10px;
  margin-top:50px;
`;

const CardHeading = styled.div`
    font-size: 26px;
    font-weight: 500;
  `;
const CardTitle = styled.p`
   font-size: 20px;
    color:#9F9DFF;
    font-weight: 300;
`;  
const CardImage = styled.div`
  padding: 10px;
    border: 2px solid #5452F6;
    border-radius: 20px;
    height: ${props=>props.height || "100px"};
    width: ${props=>props.width || "100px"};
`;  
const ShadowBox = styled.div`
   padding: 10px;
    box-shadow: 0 0 10px 5px #e0e0e0;
    border-radius: 10px;
    height: 80px;
`;
  
function Card({title,heading,image,height,width}) {
    
    return (
        <SingleCard>
            <CardImage height={height} width ={width} >
                <ShadowBox>
                    <img src={image}/>
                </ShadowBox>
            </CardImage>
            <br/><br/>
            <CardHeading> {heading}</CardHeading>
            <CardTitle>{title}</CardTitle>
        </SingleCard>
    );
}

export default Card;

