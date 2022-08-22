import React, {useState} from "react";
import styled from "styled-components";
import dataFoods from '../dataBase/FoodLists.json';
import GlobalStyle from "./GlobalStyle";
import Redheart from '../assets/Redheart.png'
import Blackheart from '../assets/blackHeart.png'




const Container= styled.div`
    position: relative;
    width: 25rem;
    height: 40rem;
   
    background-color: #fff;
    border 0.2rem solid #aebde2;
    margin: auto;
    margin-top: 3rem;
    border-radius: 20%;
    
`;
const PopTitile = styled.div`
    width: 20rem;
    height: 3rem;
    -webkit-text-stroke: 0.0625rem #000;
    font-family: 'Nanum Brush Script', cursive;
    font-size: 2rem;
    margin: auto;
    margin-top:2rem;
    color: #8ca8f0;
    border-bottom: 0.1rem solid #aebde2;
`;

const Popimg = styled.img`
    display: block;
    width: 20rem;
    height: 12rem;
    margin: auto;
    margin-top: 2rem;
    
    border-radius: 5%;
    

`;

const PopImfo= styled.div`
   
    width: 20rem;
    height: 16rem;
    margin: auto;
    margin-top: 2rem;
    border-top: 0.2em solid #aebde2;
    border-bottom: 0.1em solid #aebde2;

`
;

const Close= styled.button`

    width: 15rem;
    height: 2rem;
    margin-left: 5rem;
    margin-top:  0.3rem;
    border-top: 0.2em solid #aebde2;
    border-bottom: 0.1em solid #aebde2;
    font-family: 'Dalseo';
    font-size: 1rem;
    background-color: #B2C8DF;
    border: 0;
    border-radius: 20%;
    cursor: pointer;

`
;
const Wish= styled.div`

    width: 20rem;
    height: 16rem;
    
    margin: auto;
    margin-top: 2rem;
    border-top: 0.2em solid #aebde2;
    border-bottom: 0.1em solid #aebde2;

`
;
const AddWishbox =styled.div`
    position: absolute;
    width: 10rem;
    height:2rem;
    font-size: 0.5rem;
    font-family: 'Nanum Brush Script', cursive;
    font-style: italic;
    color: #8ca8f0;
    cursor: pointer;
    text-align:center;
    bottom: 2rem;
    left: 15rem;
    
    
`

const RedHeart = styled.img`
    width:1rem;
    height:1rem;
`;
const BlackHeart = styled.img`

    width:1rem;
    height:1rem;
`;



function PopImfo({setPopshow}) {

        const [foodsLists, setTest] = useState(dataFoods);
            let guGun = '해운대구';

        let food = foodsLists.filter(
            (foodlist) => (foodlist.구군 == guGun)
            )
        const testFood = food.map((test)=>(
                test.썸네일이미지URL
            ))
        const testName= food.map((test)=>(
                test.콘텐츠명
            ))
        
        const [heartChange, setHeartChange]=useState(true);

    return(
        <>
        <GlobalStyle/>  
        <Container>
            <PopTitile>Busan Tasty Road</PopTitile>
            <Popimg src= {testFood[0]}/>
            <PopImfo>상호명:{testName[0]}</PopImfo>
            
            <Close onClick={()=>{setPopshow(false)}}>Back</Close>
            <AddWishbox><RedHeart src={heartChange?Blackheart:Redheart} onClick={() => {setHeartChange(!heartChange)}}/> Add Wish</AddWishbox>
            

        </Container>
      
        </>
    )
    




};



export default PopImfo;