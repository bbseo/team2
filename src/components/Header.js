
import React from 'react';
import logo from '../assets/logo.png';
import styled from "styled-components";
import {Link} from "react-router-dom"
const HeaderContainer = styled.div`
    position: relative;
    display:flex;
    width: 105rem;
    height: 4.84rem;
    margin-bottom: 80px;

`;

const Logo = styled.div`
    display: inline-block;
    width: 200px;
    text-align: center;
    margin-left: 20px;
    border-radius: 15px;
`;

const Dynamic = styled.p`
    font-weight: bold;
    font-size: 50px;
    font-family: 'Nanum Brush Script', cursive;
    font-style: italic;
    color: #1C3879;
    margin: 0;
    padding: 0;
`;

const Boat = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 20px;
`;

const Busan = styled.span`
    font-weight: bold;
    font-size: 30px;
    font-family: 'Nanum Brush Script', cursive;
    font-style: italic;
    color: #8ca8f0;
    margin-left: 30px;
`;

const BusanTiltle = styled.div`
    width: 45rem;
    height: 4.812rem;
    -webkit-text-stroke: 1px #000;
    font-family: Sora;
    font-size: 2.25rem;
    margin-top: 50px;
    margin-left: 500px;
    color: #8ca8f0;

`;

function Header() {

return(
    
    <HeaderContainer>
        <Link to={"/"}>
        <Logo><Dynamic>Dynamic</Dynamic><Boat src={logo}/><Busan>Busan</Busan></Logo>
        </Link>
        <BusanTiltle>Busan Tasty Road</BusanTiltle>
    </HeaderContainer>
    

)


}

export default Header;