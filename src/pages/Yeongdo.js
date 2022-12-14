import React, {useState} from "react";
import dataFoods from '../dataBase/FoodLists.json';
import styled from "styled-components";
import YeongdoImg from "../assets/yeongdo.png"
import Footer from "../components/Footer";
import PopImfo from "./PopInfo";
import FoodHeader from '../components/FoodHeader';

const Container= styled.div`
    position: relative;
    width: 80rem; 
    background-color: #fff;
    border 0.2rem solid #aebde2;
    margin: auto; 
`;
  
const YeongdoLogo = styled.img`
    display:block;
    width: 40rem;
    height: 20rem;
    margin: auto;
    margin-top:1rem;
`;

const YeongdoTitle = styled.span`
    width: 17.5rem;
    height: 7.5;
    margin-left: 33.5rem;
    font-family: Inter;
    font-size: 3rem;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #26416b;
`;

const YeongdoLine = styled.div`
    width: 35rem;
    height: 2px;
    margin: 1rem 0 1rem 22.5rem;
    background-color: #a4b5e1;
`;

const InBusan = styled.span`
    width: 10rem;
    height: 7.5rem;
    margin-left: 35.5rem;
    font-family: Inter;
    font-size: 1.8rem;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #26416b;   
`;

const ImgContainer = styled.div`
    display: inline-block;
    width: 80rem;
    height: 15rem;
    text-align: center;
    margin-top: 3rem;
    margin-left: 1rem; 
`;

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
`;

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
`;

function Yeongdo({setWishid, onAdd, wishItem, onDelete}) {

    const [foodsLists, setFoodLists] = useState(dataFoods);

    const locaton = '?????????';

    const food = foodsLists.filter((foodlist) => (foodlist.?????? == locaton));

    const foodImg = food.map((data)=>(data.??????????????????URL));
    const foodId = food.map((data)=>(data.?????????ID));
    
    const [PopShow, setPopshow ]=useState(false);

    const [sendId, setSendId] = useState(foodId);

    // ??? ?????? ?????? ?????????
    const [ foodShow, setFoodShow ] = useState(false);

    // ??? ?????? ?????? ?????? ??????
    const [ button, setButton ] = useState('MORE');

        return(
        
            <div>

                <Container>
                
                    <FoodHeader/>
                    <YeongdoLogo src={YeongdoImg}/>
                    <YeongdoTitle>Yeongdo</YeongdoTitle>
                    <YeongdoLine />
                    <InBusan>IN BUSAN</InBusan>

                    {/* ?????? 1~3 */}
                    <ImgContainer>
                    {foodImg.map((food, idx) => {
                            if (idx < 3) {
                                return <FoodImg src={foodImg[idx]} 
                                                onClick= {() => {setPopshow(true)
                                                                setSendId(foodId[idx])}}/>
                            }
                        })}
                    </ImgContainer>

                    {/* ?????? 4~6 */}
                    <ImgContainer>
                    {foodImg.map((food, idx) => {
                            if (idx > 2 && idx < 6) {
                                return <FoodImg src={foodImg[idx]} 
                                                onClick= {() => {setPopshow(true)
                                                                setSendId(foodId[idx])}}/>
                            }
                        })}
                    </ImgContainer>

                    {/* ??? ?????? */}
                    {foodShow && <ImgContainer>
                    {foodImg.map((food, idx) => {
                        if (idx > 5 && idx < 9) {
                            return <FoodImg src={foodImg[idx]} 
                                            onClick= {() => {setPopshow(true)
                                                            setSendId(foodId[idx])}}/>
                            }
                        })}
                    </ImgContainer>}
                        <MoreButton onClick={() => {
                            setFoodShow((prev) => !prev)
                            button == 'CLOSE' ? setButton('MORE') : setButton('CLOSE')
                            }}>{button}</MoreButton>
                    <Footer/>

                </Container>

                {PopShow && <PopImfo sendId={sendId} setPopshow={setPopshow} setWishid={setWishid} onAdd={onAdd} onDelete={onDelete} wishItem={wishItem} />}
            
            </div>
    
    );
}

export default Yeongdo;