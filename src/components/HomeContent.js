import React from "react";
import styled from "styled-components";
import map from "../assets/map.PNG"
import pin from "../assets/pin.png"
import { Link } from "react-router-dom";
import { useState } from "react";

const Map = styled.img`
    
    width: 75rem;
    height: 43.75rem
    flex-grow: 0;
    margin-left: 18.75rem;
`;

const MapPin = styled.div`
    position: relative;
`;


const Haeundae = styled.img`
 
    position: absolute;
    height: 2.5rem;
    weight: 2.5rem;
    margin-left: 64.375rem;
    margin-top: 18.125rem;
    cursor: pointer;
    &:hover{
        width: 3.5em;
        height: 3.5rem;
        margin-left: 64.375rem;
        margin-top: 18.125rem;
    }
`;

const NameHaeundae = styled.div`
  position: absolute;
  width: 6rem;
  height: 3rem;
  font-size: 1.5rem;
  left: 63.5rem;
  bottom: 28.5rem;
  color: white;
  font-family: Sora;
  font-weight: 100;
  `;



const Namgu = styled.img`
    
    position: absolute;
    height: 2.5rem;
    weight: 2.5rem;
    margin-left: 60rem;
    margin-top: 27rem;
    cursor: pointer;
    &:hover{
        width: 3.5em;
        height: 3.5rem;
        margin-left: 60rem;
        margin-top: 27rem;
    }
`;
const NameNamgu = styled.div`
  position: absolute;
  width: 3em;
  height: 3rem;
  font-size: 1.5rem;
  left: 60rem;
  bottom: 19.5rem;
  color: white;
  font-family: Sora;
  font-weight: 100;
  `;

const Jingu = styled.img`
    
    position: absolute;
    height: 2.5rem;
    weight: 2.5rem;
    margin-left: 55rem;
    margin-top: 22.875rem;
    cursor: pointer;
    &:hover{
        width: 3.5em;
        height: 3.5rem;
        margin-left: 55rem;
        margin-top: 22.875rem;
    }
`;

const NameJingu = styled.div`
  position: absolute;
  width: 3em;
  height: 3rem;
  font-size: 1.5rem;
  left: 55.2rem;
  bottom: 23.3rem;
  color: white;
  font-family: Sora;
  font-weight: 100;
  `;


const Yeongdo = styled.img`
    
    position: absolute;
    height: 2.5rem;
    weight: 2.5rem;
    margin-left: 57.25rem;
    margin-top: 32.375rem;
    cursor: pointer;
    &:hover{
        width: 3.5em;
        height: 3.5rem;
        margin-left: 57.25rem;
        margin-top: 32.375rem;
    }
`;

const NameYeongdo = styled.div`
  position: absolute;
  width: 3em;
  height: 3rem;
  font-size: 1.5rem;
  left: 56.8rem;
  bottom: 13.5rem;
  color: white;
  font-family: Sora;
  font-weight: 100;
  `;

   




function HomeContent() {
    const [showValue, setShowvalue]=useState(false);
    const [showValue2, setShowvalue2]=useState(false);
    const [showValue3, setShowvalue3]=useState(false);
    const [showValue4, setShowvalue4]=useState(false);
    return(
        <MapPin>
            <Link to={"heaundae"}> 
                <Haeundae src={pin} onClick={(e) => {console.log('해운대')}} onMouseOver={()=>setShowvalue(true)} onMouseOut={()=>setShowvalue(false)}/>
            </Link>
            { showValue && <NameHaeundae>해운대구</NameHaeundae> }
            <Link to={"jingu"}>
                <Jingu src={pin} onClick={(e) => {console.log('진구')}} onMouseOver={()=>setShowvalue2(true)} onMouseOut={()=>setShowvalue2(false)}/>
            </Link>
            { showValue2 && <NameJingu>진구</NameJingu> }
            <Link to={"heaundae"}> 
                <Namgu src={pin} onClick={(e) => {console.log('남구')}} onMouseOver={()=>setShowvalue3(true)} onMouseOut={()=>setShowvalue3(false)}/>
            </Link>
            { showValue3 && <NameNamgu>남구</NameNamgu> }
            <Link to={"heaundae"}>
                <Yeongdo src={pin} onClick={(e) => {console.log('영도구')}} onMouseOver={()=>setShowvalue4(true)} onMouseOut={()=>setShowvalue4(false)}/>
            </Link>
            { showValue4 && <NameYeongdo>영도구</NameYeongdo> }
            <Map src={map} /> 
        </MapPin>
    )
}

export default HomeContent;