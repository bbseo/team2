import React from "react";
import styled from "styled-components";
import jingu from '../assets/jingu.png';
import content1 from '../assets/Content1.PNG';
import content2 from '../assets/Content2.PNG';
import content3 from '../assets/Content3.PNG';
import logo from '../assets/logo.png';

const GlobalDiv =styled.div`
    background-color: #F4F9F9;
`;

const Header = styled.div`
`;

const Logo = styled.img`
    display: inline-block;
    width: 200px;
    text-align: center;
    padding: 30px 0px;
    margin-top: 20px;
    margin-left: 20px;
    border-radius: 15px;
`;

const Title = styled.div`
    display: inline-block;
    width: 1000px;
    text-align: center;
    padding: 20px 0px;
    border-radius: 15px;
    border: 2px solid #A4EBF3;
    margin-left: 250px;
    background-color: #CCF2F4;
`;

const ImgBox = styled.img`
    float: right;
    margin-right: 20px;
    margin-top: 20px;
`;

const ContentBox = styled.div`
    width: 100%;
    height: 1230px;
    margin: 100px auto;
    background-color: #CCF2F4;
    border-radius: 15px;
    border: 2px solid #A4EBF3;
`;

const ContentList = styled.li`
    list-style: none;
    display:flex;
`;

const ContentThum1 = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid #42C2FF;
    margin-left: 240px;
    margin-top: 135px;
`;
const ContentThum2 = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid #42C2FF;
    margin-left: 240px;
    margin-top: 135px;
`;

const ContentThum3 = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid #42C2FF;
    margin-left: 240px;
    margin-top: 135px;
`

const ContentText = styled.div`
    width: 1000px;
    margin-left: 50px;
    margin-top: 120px;
    background-color: #E1EFF6;
    display: inline-block;
    font-size:30px;
    color:black;
    text-align:center;
    padding: 100px 0;
    border-radius: 15px;
    border: 2px solid #42C2FF;
`;

const Footer = styled.footer`
    width: 100%;
    height: 150px;
    background-color: #AAAAAA;
`;


function Jingu() {
    return(
        <GlobalDiv>
            <Header>
            <Logo src={logo}/> <Title>Title</Title> <ImgBox src={jingu} />
            </Header>
            <ContentBox>
                <ul>
                    <ContentList><ContentThum1 src={content1}/><ContentText>Text</ContentText></ContentList>
                    <ContentList><ContentThum2 src={content2}/><ContentText>Text</ContentText></ContentList>
                    <ContentList><ContentThum3 src={content3}/><ContentText>Text</ContentText></ContentList>
                </ul>
            </ContentBox>
            <Footer />
        </GlobalDiv>
    );
}

export default Jingu;