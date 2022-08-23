import React, {useState} from "react";
import dataFoods from '../dataBase/FoodLists.json';
import styled from "styled-components";
import haeundae from "../assets/haeundae.PNG"
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


function Haeundae({setWishid}) {

const [foodsLists, setTest] = useState(dataFoods);


// console.log(foodsLists)

let guGun = '해운대구';

let food = foodsLists.filter(
  (foodlist) => (foodlist.구군 == guGun)
)


  

const testFood = food.map((test)=>(
  test.썸네일이미지URL
))
const testId = food.map((test)=>(
    test.콘텐츠ID
))


  
  
const [PopShow, setPopshow ]=useState(false);
const [sendId, setSendId] = useState(testId);




    return(
       
      <div>
   {!PopShow && <Container>
        
        <FoodHeader/>
        <HaeunLogo src={haeundae}/>
        <ImgContainer>
            <FoodImg src={testFood[0]} onClick= {() => {setPopshow(true)
                                                        setSendId(testId[0])}}/>
            <FoodImg src={testFood[1]} onClick= {() => {setPopshow(true)
                                                        setSendId(testId[1])}}/>
            <FoodImg src={testFood[2]} onClick= {() => {setPopshow(true)
                                                        setSendId(testId[2])}}/>
        </ImgContainer>

        <ImgContainer>
            <FoodImg src={testFood[3]} onClick= {() => {setPopshow(true)
                                                        setSendId(testId[3])}}/>
            <FoodImg src={testFood[4]} onClick= {() => {setPopshow(true)
                                                        setSendId(testId[4])}}/>
            <FoodImg src={testFood[5]} onClick= {() => {setPopshow(true)
                                                        setSendId(testId[5])}}/>
        </ImgContainer>

        <Footer/>

    </Container>}

      {PopShow && <PopImfo sendId={sendId} setPopshow={setPopshow} setWishid={setWishid}/>}
      
   
  </div>
    
   
    )
}




export default Haeundae;