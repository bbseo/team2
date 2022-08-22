import React, { useState } from "react";
import { foodSearchValue } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import dataFoods from "../database/FoodLists.json";
import HomeHeader from "./HomeHeader";
 
const FoodImg = styled.img`
    width: 10rem;
    height: 10rem;
    margin-left: 55rem;
    border-radius: 50%;
    border  solid black;


`

function SearchPage() {

    const location = useLocation();

    // 검색 값
    const searchValue = location.state;

    const [foodsLists, setTest] = useState(dataFoods);
    const food = foodsLists.filter((foodlist) => (foodlist.콘텐츠명 == searchValue));
    console.log(food[0].콘텐츠명);
   


    return(
        <div>
            <FoodImg src={food[0].썸네일이미지URL} />
        </div>
    )
}

export default SearchPage;