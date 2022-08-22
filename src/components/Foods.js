import React, {useState} from "react";
import dataFoods from '../dataBase/FoodLists.json';


function Foods() {

const [foodsLists, setTest] = useState(dataFoods);

console.log(foodsLists)

const food = foodsLists.map(
    (foodlist)  =>(foodlist.구군 =='해운대구') ?
  (<li> 
    <img src={foodlist.이미지URL}></img> <br />
    이름: {foodlist.콘텐츠명} <br /> 
    소개: {foodlist.상세내용} <br /> 
    대표매뉴: {foodlist.대표메뉴} <br /> 
    주소: {foodlist.주소} <br /> 
    운영시간: {foodlist['운영 및 시간']}<br />   
    전화번호: {foodlist.연락처}  
  </li>) : false
  
  )

    return(
        <div>

        {food}

        </div>

    )





}




export default Foods;