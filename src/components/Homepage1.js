import React from "react";
import styled from "styled-components";
import logo from '../assets/logo.png';
import main from '../assets/main.png';
import map from '../assets/mapPin.png';
import {Link} from "react-router-dom"

const HOME= styled.div`
    position: relative;
    width: 90rem;
    height: 64rem;
    flex-grow: 0;
    background-color: #fff;
    border 2px solid black;
`;
const Logo = styled.img `
    
    position: absolute;
    width: 10.44rem;
    height: 4.81rem;
    
  `;

const BusanTiltle = styled.div`
    width: 45rem;
    height: 4.812;
    -webkit-text-stroke: 1px #000;
    font-family: Sora;
    font-size: 2.25rem;
    text-align: center;
    color: #8ca8f0;
    position: absoulte;
   
    margin: auto;
  `;
const Menu = styled.div`
    position: absolute;
    width: 10.44rem;
    height: 3.88rem;
    padding: 0 52px 0 64px;
    border-radius: 30px;
    background-color: #aebde2;
    top:0;
    right:0;
    font-family: Sora;
    font-size: 2.5rem;
    text-align: center;
    color: #000;
  `;
  

  const Main = styled.img `
    
    width: 90rem;
    height: 25.1rem;
    margin-top: 3rem;
  `;

  const Map = styled.img`
    display: block;
        
    width: 43.75rem;
    height: 31.69rem;
    margin: auto;
    

  `

  const NavHaeundae = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  left: 51.15rem;
  bottom: 17.5rem;


  `


    
  

 

  



function HomePage1() {

return(
    <HOME>
        <Logo src={logo} />
        <BusanTiltle>Busan Tasty Road</BusanTiltle>
        <Menu>Menu</Menu>
        <Main src={main}/>
        <Map src={map}/>
       <Link to={"heaundae"}>
        <NavHaeundae></NavHaeundae>
       </Link>

        
        


    </HOME>
)


}




export default HomePage1;

