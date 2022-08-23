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
    cursor: pointer;
    border-radius: 50%;
    border  solid black;
    margin-right: 2rem;
    &:hover{
        border dashed #8ca8f0;
    }
`

const MoreButton = styled.span`
    display: block;
    width: 140px;
    height: 54px;
    font-family: 'Dalseo';
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    line-height:54px;
    vertical-align: middle;
    color: #000;
    border: 0.3rem solid #8ca8f0;
    border-radius: 25%;
    margin: auto;
    cursor: pointer;
    margin-bottom: 1rem;
`


function Haeundae({setWishid}) {

const [foodsLists, setTest] = useState(dataFoods);




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

// 더 보기 음식 리스트
const [ foodShow, setFoodShow ] = useState(false);

// 더 보기 버튼 이름 변경
const [ button, setButton ] = useState('MORE');



    return(
       
      <div>
        <Container>
        
        <FoodHeader/>
        <HaeunLogo src={haeundae}/>
        {/* 음식 1~3 */}
        <ImgContainer>
        {testFood.map((food, idx) => {
                if (idx < 3) {
                    return <FoodImg src={testFood[idx]} onClick= {() => {setPopshow(true)
                        setSendId(testId[idx])}}/>
                }
            })}
        </ImgContainer>

        {/* 음식 4~6 */}
        <ImgContainer>
        {testFood.map((food, idx) => {
                if (idx > 2 && idx < 6) {
                    return <FoodImg src={testFood[idx]} onClick= {() => {setPopshow(true)
                        setSendId(testId[idx])}}/>
                }
            })}
        </ImgContainer>
        
        {/* 더 보기 */}
        {foodShow && <ImgContainer>
        {testFood.map((food, idx) => {
            if (idx > 5 && idx < 9) {
                return <FoodImg src={testFood[idx]} onClick= {() => {setPopshow(true)
                    setSendId(testId[idx])}}/>
                }
            })}
        </ImgContainer>}
            <MoreButton onClick={() => {
                setFoodShow((prev) => !prev)
                button == 'CLOSE' ? setButton('MORE') : setButton('CLOSE')
                }}>{button}</MoreButton>
        <Footer/>

    </Container>

      {PopShow && <PopImfo sendId={sendId} setPopshow={setPopshow} setWishid={setWishid}/>}
      
   
  </div>
    
   
    )
}




export default Haeundae;