import React, {useState} from "react";
import styled from "styled-components";
import dataFoods from '../dataBase/FoodLists.json';





const Container= styled.div`
    position: relative;
    width: 25rem;
    height: 40rem;
   
    background-color: #fff;
    border 0.2rem solid #aebde2;
    margin: auto;
    margin-top: 8rem;
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

    width: 20rem;
    height: 16rem;
    margin: auto;
    margin-top: 2rem;
    border-top: 0.2em solid #aebde2;
    border-bottom: 0.1em solid #aebde2;

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





function Imfo() {

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
        


    return(
        <>
        
        <Container>
            <PopTitile>Busan Tasty Road</PopTitile>
            <Popimg src= {testFood[2]}/>
            <PopImfo>상호명:{testName[2]}</PopImfo>

        </Container>
        </>
    )





};



export default Imfo;