import React, { useState } from "react";
import styled from "styled-components";


const LogoImg = styled.img`
display:block;
width: 45rem;
height: 31.25rem;
margin: auto;
` ;



function Logo() {    
    
    
    const [guImg, setGuImg] = useState("");
    let local = 'haeundae'; 
    
    setGuImg("http://localhost:3000/" + local +".PNG")

    return(
        <LogoImg src={guImg}></LogoImg>
    )
}

export default Logo;