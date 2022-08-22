
import React from 'react';
import logo from '../assets/logo.png';
import styled from "styled-components";
import {Link} from "react-router-dom"
const HeaderContainer = styled.div`
    display:flex;
    width: 105rem;
    height: 10rem;
    margin-bottom: 3.125rem;
    border-bottom: 0.1875rem dashed #aebde2;
`;

const Logo = styled.div`
    display: inline-block;
    width: 12.5rem;
    text-align: center;
    margin-left: 1.25rem;
    margin-top: 1.25rem;
    border-radius: 0.9375rem;
`;

const Dynamic = styled.p`
    font-weight: bold;
    font-size: 3.125rem;
    font-family: 'Nanum Brush Script', cursive;
    font-style: italic;
    color: #1C3879;
    margin: 0;
    padding: 0;
`;

const Boat = styled.img`
    width: 3.125rem;
    height: 3.125rem;
    margin-left: 1.25rem;
`;

const Busan = styled.span`
    font-weight: bold;
    font-size: 1.875rem;
    font-family: 'Nanum Brush Script', cursive;
    font-style: italic;
    color: #8ca8f0;
    margin-left: 1.875rem;
`;

const BusanTiltle = styled.div`
    width: 45rem;
    height: 4.812rem;
    -webkit-text-stroke: 0.0625rem #000;
    font-family: 'Nanum Brush Script', cursive;
    font-size: 2.25rem;
    margin-top: 3.4375rem;
    margin-left: 31.25rem;
    color: #8ca8f0;

`;

function FoodHeader() {

return(
    
    <HeaderContainer>
        <Link to={"/"}>
        <Logo><Dynamic>Dynamic</Dynamic><Boat src={logo}/><Busan>Busan</Busan></Logo>
        </Link>
        <BusanTiltle>Busan Tasty Road</BusanTiltle>
    </HeaderContainer>
    

)


}

export default FoodHeader;