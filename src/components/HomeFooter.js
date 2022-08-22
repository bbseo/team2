import React from "react";
import styled from "styled-components";
import boat from "../assets/boat.png"

const Boat = styled.img`
    width: 40px;
    height: 45px;
    margin: 0px 0 11px 64px;
    display: flex;
`
const TeamName = styled.span`
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    width: 300px;
    height: 11px;
    margin: 0 7px 15px 64px;
    font-family: Inter;
    font-size: 18px;
    font-weight: 100;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;
`

const Name = styled.span`
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    width: 35px;
    height: 11px;
    margin: 15px 8px 0 64px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 100;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;
`

function Footer() {
    return(
        <div>
            <Boat src={boat} />
            <TeamName>DouZone&nbsp;&nbsp;Team2&nbsp;&nbsp;Mini Project</TeamName>
            <Name>황동하&nbsp;&nbsp;김재선&nbsp;&nbsp;배병서&nbsp;&nbsp;이광석</Name>

        </div>
    )
}

export default Footer;