import React, {useState} from "react";
import dataFoods from '../dataBase/FoodLists.json';
import styled from "styled-components";
import haeundae from "../assets/haeundae.PNG"
import Footer from "./Footer";
import Imfo from "./Imfo";
import FoodHeader from './FoodHeader';

const Container= styled.div`
    position: relative;
    width: 80rem; 
    background-color: #fff;
    border 0.2rem dashed #aebde2;
    margin: auto;
  
    
`;
  
const HaeunLogo = styled.img`
    display:block;
    width: 45rem;
    height: 29.25rem;
    margin: auto;
    ` ;
const ImgContainer = styled.div`
    display: inline-block;
    width: 80rem;
    height: 15rem;
    text-align: center;
    margin-top: 1rem;
    
    

    
    
`

const FoodImg = styled.img`
    width: 10rem;
    height: 10rem;
   
    border-radius: 50%;
    border  solid black;
    margin-right: 2rem;
`


function Haeundae() {

const [foodsLists, setTest] = useState(dataFoods);


// console.log(foodsLists)

let guGun = '해운대구';

let food = foodsLists.filter(
  (foodlist) => (foodlist.구군 == guGun)
)

// const food = foodsLists.map(
//     (foodlist)  =>(foodlist.구군 =='해운대구') ? 
//   (<li> 
//     <img src={foodlist.이미지URL}></img> <br />
//     이름: {foodlist.콘텐츠명} <br /> 
//     소개: {foodlist.상세내용} <br /> 
//     대표매뉴: {foodlist.대표메뉴} <br /> 
//     주소: {foodlist.주소} <br /> 
//     운영시간: {foodlist['운영 및 시간']}<br />   
//     전화번호: {foodlist.연락처}  
//   </li>) : (<></>) 
//   )
  

const testFood = food.map((test)=>(
  test.썸네일이미지URL
))



  
  
const [PopShow, setPopshow ]=useState(false);




    return(
       
      <div>
     {!PopShow && <Container>
        
          <FoodHeader/>
          <HaeunLogo src={haeundae}/>
          <ImgContainer>
              <FoodImg src={testFood[0]} onClick= {() =>(setPopshow(true))}/>
              <FoodImg src={testFood[1]}/>
              <FoodImg src={testFood[2]}/>
          </ImgContainer>

          <ImgContainer>
              <FoodImg src={testFood[3]}/>
              <FoodImg src={testFood[4]}/>
              <FoodImg src={testFood[5]}/>
          </ImgContainer>

          <Footer/>

      </Container>}

      {PopShow && <Imfo setPopshow={setPopshow}/>}
      
   
  </div>
    
   
    )
}




export default Haeundae;