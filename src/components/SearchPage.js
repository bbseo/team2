import React, { useState } from "react";
import { foodSearchValue } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import dataFoods from "../dataBase/FoodLists.json";
import FoodHeader from "./FoodHeader";
import PopImfo from "./PopImfo";
 
// const FoodImg = styled.img`
//     width: 10rem;
//     height: 10rem;
//     margin-left: 55rem;
//     border-radius: 50%;
//     border  solid black;


// `

const SearchFoodImg = styled.img`
    margin-top: 5rem;

    margin-left: 42rem;
    display:block;
    width: 35.5rem;
    height: 18rem;

    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 10%;
`

const Span = styled.span`
    display: flex;
    justify-content: center;
    font-family: 'Dalseo';
`

const List = styled.li`
    list-style: none;
`

function SearchPage() {

    const location = useLocation();

    // 검색 값
    const searchValue = location.state;

    const [foodsLists, setTest] = useState(dataFoods);
    const food = foodsLists.filter((foodlist) => (foodlist.콘텐츠명 == searchValue));

    const foodInfo = food.map(
        (info) => (
            <List>
                <SearchFoodImg src={info.이미지URL} /> <br />
                <Span>제목 : {info.콘텐츠명} </Span> <br />
                <Span>주소 : {info.주소}</Span> <br />
                <Span>운영 및 시간 :{info['운영 및 시간']}</Span> <br />
                <Span>연락처 : {info.연락처} </Span>
            </List>
        ))

    return(
        <div>
            <FoodHeader />
            {foodInfo}
        </div>
    )
}

export default SearchPage;