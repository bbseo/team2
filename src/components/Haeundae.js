import React from "react";
import Header from "./Header";
import styled from "styled-components";
import haeundae from "../assets/haeundae.PNG"
import meat from "../assets/meat.jpg"
import Footer from "./Footer";

const HaeunLogo = styled.img`
    width: 756px;
    height: 500px;
    margin: 0 0 50px 582px;
`

const FoodImg = styled.img`
    width: 250px;
    height: 250px;
    padding: 101px 60.9px 105px 61px;
    border-radius: 50%;
`

const ImgContainer = styled.div`
    display: flex;
    margin-left: 400px
`

function Haeundae() {
    return(
        <div>
            <Header />
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
            <Footer />
        </div>
    )
}

export default Haeundae;