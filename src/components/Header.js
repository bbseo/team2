import styled from "styled-components";
import search from "../assets/search.PNG"

const Head = styled.div`
    display: flex;
`

const Logo = styled.div`
    display: flex;
    width: 101px;
    height: 44px;
    margin: 48px 70px 45px 70px;
    font-family: Inter;
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #a4b5e1;
    cursor: pointer;
`



// const Input = styled.div`
//     display: flex;
//     justify-content: center;
//     padding: 44px 0 44px;
//     width: 200px;
// `

const Input = styled.input`
    font-size:15px;
    height: 44px;
    width:200px;
    display: flex;
    BORDER-BOTTOM: 1px solid #A4B5E1;
    BORDER-LEFT: medium none;
    BORDER-RIGHT: medium none;
    BORDER-TOP: medium none;
    margin-left: auto;
    margin-top: 50px;
    text-align: center;
`
const Search = styled.img`
    width: 30px;
    height: 30px;
    margin-top: 60px;
    margin-right: 70px;
    padding-left: 10px;
    cursor: pointer;
`




function Header() {
    return(
            <Head>
                <Logo onClick={(e) => console.log('로고')}>부산맛집</Logo>
                <Input placeholder="검색"/>
                <Search src={search} onClick={(e) => console.log('검색')}></Search>
            </Head>

    )
}


export default Header;