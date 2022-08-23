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
    height: 15rem;
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
    width: 10rem;
    height:2rem;
    font-size: 1rem;
    margin-left: 7.5rem;
    margin-top: 0.5rem;
    font-family: 'Dalseo';
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

const List = styled.li`
    list-style: none;
`;

const Text = styled.p`
    font-family: 'Dalseo';
`;


function PopImfo({setPopshow, sendId}) {

        const [foodsLists, setTest] = useState(dataFoods);
        const checkId = sendId;

        let food = foodsLists.filter(
            (foodlist) => (foodlist.콘텐츠ID == checkId)
            )
            const foodFullList = food.map(
                (foodlist)  =>(  
              <List> 
                    <Popimg  src={foodlist.이미지URL} />
                    <Text>제목 : {foodlist.콘텐츠명} </Text> 
                    <Text>대표메뉴 : {foodlist.대표메뉴}</Text> 
                    <Text>주소 : {foodlist.주소}</Text> 
                    <Text>운영 및 시간 :{foodlist['운영 및 시간']}</Text> 
                    <Text>연락처 : {foodlist.연락처} </Text>
              </List>)
              )
        
        const [heartChange, setHeartChange]=useState(true);

    return(
        <>
        <GlobalStyle/>  
        <Container>
            <PopTitile>Busan Tasty Road</PopTitile>
            {foodFullList}
            
            <Close onClick={()=>{setPopshow(false)}}>Back</Close>
            <AddWishbox><RedHeart src={heartChange?Blackheart:Redheart} onClick={() => {setHeartChange(!heartChange)}}/> Add Wish</AddWishbox>
            

        </Container>
      
        </>
    )




};



export default PopImfo;