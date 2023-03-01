import * as React from "react";
import styled from "styled-components";
import axios from "axios";
import { CarteGory } from "./CarteGory";


export type State = { menuId : number; menuTitle : string };

interface ChunkProps {
    (data : State[], size: number): State[][];
}

const Layout = styled.div<{ page : number | undefined }>`
    height:100%;
    display: flex;

    .cartegory-list{
        flex:1;
        display:flex;
        ul{
            flex:1;
            display:flex;
            overflow: hidden;
            li{
                flex: 0 0 100%;
                transform: translateX(-${props => props.page ? props.page * 100 : 0}%);
                transition: 1s;
            }
        }
    }
    .left{
        cursor: pointer;
        font-size:50px;
        background-color:transparent;
        
    }
    .right{
        cursor: pointer;
        font-size:50px;
        background-color:transparent;
    }

    
`

const chunk: ChunkProps = (data, size) => {
    let arr: State[][] = [];
    
    for(let i = 0 ; i < data.length ; i += size){
            arr.push(data.slice(i, i + size))
    }
    return arr;
};

export const CartegorySlide = () => {
    const [list, setList] = React.useState<State[][]>([]);
    const [page, setPage] = React.useState(0);
    const styles = {page};

    React.useEffect(()=>{
        axios.get(`http://localhost:4000/menu`)
        .then(res => setList(chunk(res.data, 10)))
    },[])

    const changeList = (event:React.MouseEvent<HTMLButtonElement>) : void=>{
        const value = (event.target as HTMLButtonElement)?.classList[0];
        if(value === "left"){
            if(page === 0){
                setPage(0);
            }else{
                setPage(page - 1);
            }
        }; 

        if(value === "right"){
            if(page === list?.length - 1){
                setPage(page);
            }else{
                setPage(page + 1);
            }
        };
    }

    return(
        <Layout {...styles}>
            <button className="left" onClick={(e)=> changeList(e)}>{"◀️"}</button>
            <div className="cartegory-list">
            <ul>
              {list?.map((el, idx)=>{
                return(
                    <li key={idx}><CarteGory data={el}/></li>
                );
              })}
            </ul>
            </div>
            <button className="right" onClick={(e)=> changeList(e)}>{"▶️"}</button>
        </Layout>
    );
};