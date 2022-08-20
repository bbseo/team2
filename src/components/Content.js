import React from "react";
import styled from "styled-components";
import map from "../assets/map.PNG"
import pin from "../assets/pin.png"

const Map = styled.img`
    display: flex;
    width: 1300px;
    height: 750px;
    flex-grow: 0;
    margin: auto;
`

const MapPin = styled.div`
    position: relative;
`
const Haeundae = styled.img`
    display: flex;
    position: absolute;
    height: 40px;
    weight: 40px;
    margin-left: 850px;
    margin-top: 300px;
    cursor: pointer;
`
const Namgu = styled.img`
    display: flex;
    position: absolute;
    height: 40px;
    weight: 40px;
    margin-left: 780px;
    margin-top: 440px;
    cursor: pointer;
`
const Jingu = styled.img`
    display: flex;
    position: absolute;
    height: 40px;
    weight: 40px;
    margin-left: 700px;
    margin-top: 350px;
    cursor: pointer;
`
const Yeongdo = styled.img`
    display: flex;
    position: absolute;
    height: 40px;
    weight: 40px;
    margin-left: 720px;
    margin-top: 500px;
    cursor: pointer;
`



function Content() {
    return(
        <MapPin>
            <Haeundae src={pin} onClick={(e) => {console.log('해운대')}}/>
            <Jingu src={pin} onClick={(e) => {console.log('진구')}}/>
            <Namgu src={pin} onClick={(e) => {console.log('남구')}}/>
            <Yeongdo src={pin} onClick={(e) => {console.log('영도구')}}/>
            <Map src={map} /> 
        </MapPin>
    )
}

export default Content;