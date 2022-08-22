import React, { useState } from "react";
import { foodSearchValue } from "react";
import { useLocation } from "react-router-dom";
import dataFoods from '../dataBase/FoodLists.json';
import HomeHeader from "./HomeHeader";
 

function SearchPage() {
    const location = useLocation();
    const searchValue = location.state;


    return(
        <div>
            <>hi</>
            <>{searchValue}</>
        </div>
    )
}

export default SearchPage;