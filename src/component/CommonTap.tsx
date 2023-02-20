import styled from "styled-components";
import {useState} from "react"

interface Props{
    page?: Object,
    serch?: boolean
}

const Layout = styled.div`
    height:100%;
`

const Header = styled.div`
    display:flex;
    background-color:gray;
    justify-content:center;

    button{
        height:50px;
        flex:1;
        border:1px solid black;
    }
`
const Main = styled.div`
    padding:10px;
    height:100%;

    .serch-form{
        width: 25%;
        padding:5px;
        border:1px solid black;
        margin-bottom:10px;
        display:flex;
        align-items:center;
        background-color: #A9BCFF;

        label{
            font-size:2rem;
        }
        
        input{
            padding:10px;
            height:3rem;
            border:none;
            background-color: #A9BCFF;
        }
    }
`
export const CommonTap =({page, serch = true} : Props)=>{
    const [currentPage, setCurrentPage] = useState(Object.keys(page ?? 0)[0]);
    return(
        <Layout>
            <Header>
                {page && Object.keys(page).map((key, idx)=>{
                    return(
                        <button
                        key={idx}
                        onClick={()=> setCurrentPage(key)}
                        >{key}</button>
                    );
                })}
            </Header>
            <Main>
                {serch ? <div className="serch-form">
                    <label htmlFor="serch">주문번호 검색 : </label>
                    <input id="serch"></input>
                </div> : null}
               {page && page[currentPage]}
            </Main>
        </Layout>
    );
}