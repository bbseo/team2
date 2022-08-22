import React, {useState} from "react";
import dataFoods from '../dataBase/FoodLists.json';
import styled from "styled-components";
import haeundae from "../assets/haeundae.PNG"
import meat from "../assets/meat.jpg"
import Header from "./Header";
import Footer from "./Footer";


const Container= styled.div`
    position: relative;
    width: 105rem;
   
    background-color: #fff;
    border 0.2rem dashed #aebde2;
    margin: auto;
  
    
`;
  
const HaeunLogo = styled.img`
    display:block;
    width: 45rem;
    height: 31.25rem;
    margin: auto;
    ` ;
const ImgContainer = styled.div`
    display: inline-block;
    width: 105rem;
    height: 15rem;
    text-align: center;
    
    

    
    
`

const FoodImg = styled.img`
    width: 10rem;
    height: 10rem;
    padding: 3rem 5rem;
    border-radius: 50%;
`

const Testdh = styled.div`
    width : 100rem;
    hight: 10rem;
    background : black;
    color : white;
`

function Foods() {

const [foodsLists, setTest] = useState(dataFoods);
const [testjs , setTestjs] = useState(false);
const [testjs1 , setTestjs1] = useState(false);

// console.log(foodsLists)

let guGun = '해운대구';

let food = foodsLists.filter(
  (foodlist) => (foodlist.구군 == guGun)
)


// onClick 
// const food2 = foodsLists.map(
//     (foodlist)  =>(foodlist.구군 == guGun) ? 
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

const foodTest = food.map((test)=>(
    <li> 
        <img src={test.이미지URL}></img> <br />
        이름: {test.콘텐츠명} <br /> 
        소개: {test.상세내용} <br /> 
        대표매뉴: {test.대표메뉴} <br /> 
        주소: {test.주소} <br /> 
        운영시간: {test['운영 및 시간']}<br />   
        전화번호: {test.연락처}  
    </li>
  ))

  

console.log(foodTest[0])
  
  
  
  



    return(
      <div>

    <Container onClick={() => setTestjs(!testjs)}>
        <Header/>
        <HaeunLogo src={haeundae}/>
        <ImgContainer>
            <FoodImg src={testFood[0]} onClick={() => setTestjs(!testjs)}  />
            {/* {testjs && <Testdh>{foodTest[0]} </Testdh>} */}
            <FoodImg src={testFood[1]} onClick={() => setTestjs1(!testjs1)} />
            <FoodImg src={testFood[2]}/>
        </ImgContainer>
        <ImgContainer>
            <FoodImg src={testFood[3]}/>
            <FoodImg src={testFood[4]}/>
            <FoodImg src={testFood[5]}/>
        </ImgContainer>


        {testjs && <Testdh>{foodTest[0]} </Testdh>}
        {testjs1 && <Testdh>{foodTest[1]} </Testdh>}

        <Footer/>
    </Container>
  
  </div>
    )
}




export default Foods;