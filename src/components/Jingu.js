import React, {useState} from "react";
import dataFoods from "../dataBase/FoodLists.json";
import styled from "styled-components";
import jingu from "../assets/jingu.PNG"
import Footer from "./Footer";
import PopImfo from "./PopImfo";
import FoodHeader from './FoodHeader';

const Container= styled.div`
    position: relative;
    width: 80rem; 
    background-color: #fff;
    border 0.2rem dashed #aebde2;
    margin: auto;
  
    
`;
  
const JinguLogo = styled.img`
    display:block;
    width: 35.5rem;
    height: 18rem;
    margin: auto;
    ` ;

const JinguTitle = styled.span`
    width: 17.5rem;
    height: 7.5;
    margin-left: 35.5rem;
    font-family: Inter;
    font-size: 3rem;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #26416b;
`

const JinguLine = styled.div`
    width: 35rem;
    height: 2px;
    margin: 1rem 0 1rem 22rem;
    background-color: #a4b5e1;
`

const InBusan = styled.span`
    width: 10rem;
    height: 7.5rem;
    margin-left: 35rem;
    font-family: Inter;
    font-size: 1.8rem;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #26416b;
`





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
    cursor: pointer;
    border-radius: 50%;
    border  solid black;
    margin-right: 2rem;
    &:hover{
        border dashed #8ca8f0;
    }
`


function Jingu() {

const [foodsLists, setTest] = useState(dataFoods);


// console.log(foodsLists)

let guGun = '부산진구';

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
          <JinguLogo src={jingu}/>
          <JinguTitle>Jingu</JinguTitle>
          <JinguLine />
          <InBusan>IN BUSAN</InBusan>
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

      {PopShow && <PopImfo setPopshow={setPopshow}/>}
      
   
  </div>
    
   
    )
}




export default Jingu;