import React from "react";
import styled from "styled-components";
import jingu from "../assets/jingu.png"
import meat from "../assets/meat.jpg"
import Footer from "./Footer";

const Container= styled.div`
    position: relative;
    width: 80rem;
   
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
    width: 80rem;
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

export default Jingu;