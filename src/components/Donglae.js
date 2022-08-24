import React, {useState} from "react";
import dataFoods from '../dataBase/FoodLists.json';
import styled from "styled-components";
import DonglaeImg from "../assets/donglae.PNG"
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
  
const DonglaeLogo = styled.img`
    
    display:block;
    width: 40rem;
    height: 20rem;
    margin: auto;
    margin-top:1rem;
    

   
    ` ;

    const DonglaeTitle = styled.span`
    width: 17.5rem;
    height: 7.5;
    margin-left: 32rem;
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

const DonglaeLine = styled.div`
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
    margin-top: 3rem;
   
    
    
    
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


function Donglae({setWishid, setWishTest, onAdd}) {

const [foodsLists, setTest] = useState(dataFoods);




let guGun = '동래구';

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
        <DonglaeLogo src={DonglaeImg}/>
        <DonglaeTitle>Donglae</DonglaeTitle>
          <DonglaeLine />
          <InBusan>IN BUSAN</InBusan>
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

      {PopShow && <PopImfo sendId={sendId} setPopshow={setPopshow} setWishid={setWishid} setWishTest={setWishTest} onAdd={onAdd}/>}
      
   
  </div>
    
   
    )
}




export default Donglae;