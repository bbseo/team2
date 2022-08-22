import React from "react";
import styled from "styled-components";
import jingu from "../assets/jingu.PNG"
import meat from "../assets/meat.jpg"
import Header from "./FoodHeader";
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



function TestContent() {
    return(
        <div>
            <Container>
                <Header/>
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
                <Footer/>

            </Container>
         
        </div>
    )
}

export default TestContent;