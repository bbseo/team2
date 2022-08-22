import React from "react";
import styled from "styled-components";
import haeundae from "../assets/haeundae.PNG"
import meat from "../assets/meat.jpg"
import Header from "./Header";
import Footer from "./Footer";

const Container= styled.div`
    position: relative;
    width: 105rem;
   
    background-color: #fff;
    border 0.2rem dashed #aebde2;
    margin: auto;
  
    
`;
  
const HaeunLogo = styled.img`
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



function TestContent() {
    return(
        <div>
            <Container>
                <Header/>
                <HaeunLogo src={haeundae}/>
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
                <Footer/>

            </Container>
         
        </div>
    )
}

export default TestContent;