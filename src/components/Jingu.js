import React from "react";
import styled from "styled-components";
import jingu from "../assets/jingu.PNG"
import meat from "../assets/meat.jpg"
import FoodHeader from "./FoodHeader";
import Footer from "./Footer";

const Container= styled.div`
    position: relative;
    width: 105rem;
   
    background-color: #fff;
    border 0.2rem dashed #aebde2;
    margin: auto;
  
    
`;
  
const JinguLogo = styled.img`
    display:block;
    width: 45rem;
    height: 31.25rem;
    margin: auto;
    ` ;
const ImgContainer = styled.div`
    display: inline-block;
    width: 105rem;
    height: 15rem;
    text-align: center;
    
    

    
    
`

const FoodImg = styled.img`
    width: 10rem;
    height: 10rem;
    padding: 3rem 5rem;
    border-radius: 50%;
`



function Jingu() {
    return(
        <div>
            <Container>
                <FoodHeader/>
                <JinguLogo src={jingu}/>
                <ImgContainer>
                    <FoodImg src={meat}/>
                    <FoodImg src={meat}/>
                    <FoodImg src={meat}/>
                </ImgContainer>
                <ImgContainer>
                    <FoodImg src={meat}/>
                    <FoodImg src={meat}/>
                    <FoodImg src={meat}/>
                </ImgContainer>
                <ImgContainer>
                    <FoodImg src={meat}/>
                    <FoodImg src={meat}/>
                    <FoodImg src={meat}/>
                </ImgContainer>
                <FoodHeader/>

            </Container>
         
        </div>
    )
}

export default Jingu;