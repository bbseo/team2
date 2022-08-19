import React from 'react';
import styled from 'styled-components';
import LogoImg from '../assets/Main.png';

const Home = styled.div`
    width: 1440px;
    height: 2048px;
    flex-grow: 0;
    padding: 22px 0 0 1px;
    background-color: #fff
`;

const Header = styled.div`
    width: 720px;
    height: 2px;
    margin: 58px 0 15.2px 109px;
    background-color: #a4b5e1;
`;

const HeaderLogo = styled.div`
    width: 259px;
    height: 75px;
    margin: 0 109px 0 0;
    padding: 25.1px 31px 23.1px 22px;
    background-color: #a4b5e1;
`;

const Img1 = styled.img`
    width: 1200px;
    height: 700px;
    
`;
function HomePage() {
    return(
        <Home>
            <Header>
                <HeaderLogo>Logo</HeaderLogo>
            </Header>
            <Img1 src={LogoImg}/>
        </Home>
    )
}

export default HomePage;