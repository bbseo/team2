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

const PopImfoWindow= styled.div`
   
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




function PopImfo({setPopshow, sendId}) {

        const [foodsLists, setTest] = useState(dataFoods);
        const checkId = sendId;

        const food = foodsLists.filter(
            (foodlist) => (foodlist.콘텐츠ID == checkId)
        );

        const testTitle = food.map(
            (foodlist)  => foodlist.제목
        )

        const testImg = food.map(
            (foodlist) => foodlist.썸네일이미지URL
        )
        
            // let guGun = '해운대구';

        // let food = foodsLists.filter(
        //     (foodlist) => (foodlist.구군 == guGun)
        //     )
        //     const foodFullList = food.map(
        //         (foodlist)  =>(  
        //       <li > 
        //         <Popimg  src={foodlist.이미지URL} /> <br />
        //             <span>제목 : {foodlist.콘텐츠명} </span> <br />
        //             <span>상세내용 : {foodlist.상세내용}</span> <br />
        //             <span>대표메뉴 : {foodlist.대표메뉴}</span> <br />
        //             <span>주소 : {foodlist.주소}</span> <br />
        //             <span>운영 및 시간 :{foodlist['운영 및 시간']}</span> <br />
        //             <span>연락처 : {foodlist.연락처} </span>
        //       </li>)
        //       )
        
        const [heartChange, setHeartChange]=useState(true);

    return(
        <>
        <GlobalStyle/>  
        <Container>
            <PopTitile>Busan Tasty Road</PopTitile>
            <Popimg src= {testImg}/>
            <PopImfoWindow>상호명:{testTitle}</PopImfoWindow>
            {/* {foodFullList[0]} */}
            
            <Close onClick={()=>{setPopshow(false)}}>Back</Close>
            <AddWishbox><RedHeart src={heartChange?Blackheart:Redheart} onClick={() => {setHeartChange(!heartChange)}}/> Add Wish</AddWishbox>
            

        </Container>
      
        </>
    )




};



export default PopImfo;