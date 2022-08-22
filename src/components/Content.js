import React from "react";
import styled from "styled-components";
import map from "../assets/map.PNG"
import pin from "../assets/pin.png"
import { Link } from "react-router-dom";

const Map = styled.img`
    display: flex;
    width: 1200px;
    height: 700px;
    flex-grow: 0;
    margin-left: 300px;
`

const MapPin = styled.div`
    position: relative;
`

const Slogun = styled.span`
    display: flex;
    position: absolute;
    width: 383px;
    height: 57px;
    margin: 0 295px 222px 311px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Inter;
    font-size: 32px;
    font-weight: 100;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #000;
`

const Haeundae = styled.img`
    display: flex;
    position: absolute;
    height: 40px;
    weight: 40px;
    margin-left: 1030px;
    margin-top: 290px;
    cursor: pointer;
`
const Namgu = styled.img`
    display: flex;
    position: absolute;
    height: 40px;
    weight: 40px;
    margin-left: 950px;
    margin-top: 410px;
    cursor: pointer;
`
const Jingu = styled.img`
    display: flex;
    position: absolute;
    height: 40px;
    weight: 40px;
    margin-left: 900px;
    margin-top: 350px;
    cursor: pointer;
`
const Yeongdo = styled.img`
    display: flex;
    position: absolute;
    height: 40px;
    weight: 40px;
    margin-left: 900px;
    margin-top: 470px;
    cursor: pointer;
`



function Content() {
    return(
        <MapPin>
            <Link to={"haeundae"}> <Haeundae src={pin} onClick={(e) => {console.log('해운대')}}/></Link>
            <Jingu src={pin} onClick={(e) => {console.log('진구')}}/>
            <Namgu src={pin} onClick={(e) => {console.log('남구')}}/>
            <Yeongdo src={pin} onClick={(e) => {console.log('영도구')}}/>
            <Slogun>배가 비어있다면<br /> 정신도 빌 수 밖에 없다.</Slogun>
            <Map src={map} /> 
        </MapPin>
    )
}

export default Content;