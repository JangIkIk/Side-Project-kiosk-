import * as React from "react";
import styled from "styled-components";
import axios from "axios";
import { ItemBox } from "./ItemBox";

export interface MenuItem {
  id: number;
  imges:string;
  name:string;
  price:number;
};
export type MenuItems = MenuItem[];
export type MenuItemLists = MenuItems[];


const Layout = styled.div<{page : number}>`
  height: 100%;
  display: flex;

  .items-box {
    flex: 1;
    display:flex;
    flex-direction: column;

    .items-list{
        display:flex;
        overflow: hidden;
        flex:1;
        .item{
            transform: translateX(-${props => props.page ? props.page * 100 : 0}%);
            flex: 0 0 100%;
            transition: 1s;
        }

    }

    .current-page{
      display:flex;
      justify-content:center;

      .on-color{
        background-color:red;
        width:35px;
        height:15px;
        margin: 0 10px;
        border-radius:10px;
        cursor:pointer;
      }
      .off-color{
        background-color:gray;
        width:35px;
        height:15px;
        margin: 0 10px;
        border-radius:10px;
        cursor:pointer;
      }
    }

  }


  .common-btn{
    align-self: center;
    position: relative;
    z-index:1;

    & > button{
      position: absolute;
      border-radius: 40%;
      background-color: black;
      font-size: 55px;
      left:-24px;
      top:-30px;
      color:white;
      cursor: pointer;
    }
    
    
  }
`;

function chunk(data: MenuItems, size:number): MenuItemLists {
  let arr: MenuItemLists = [];

  for(let i = 0 ; i < data.length ; i += size){
      arr.push(data.slice(i, i + size))
  }
  return arr;
}

export const ItemSlide = () => {
    const [list, setList] = React.useState<MenuItemLists>([]);
    const [page, setPage] = React.useState(0);
    const styles = {page}

    React.useEffect(()=>{
        axios.get('http://localhost:4000/item')
        .then( res => {
          const result = chunk(res.data, 12);
          setList(result);
        });
    }, []);


    const changeList = (event : React.MouseEvent<HTMLButtonElement>): void=>{
        const value = (event.target as HTMLButtonElement).value;
        
        if(value === "left"){
            if(page === 0){
              setPage(0);
            } else {
              setPage(page - 1);
            }
        }

        if(value === "right"){
            if(page === list.length - 1){
              setPage(page)
            } else {
              setPage(page + 1);
            }
        }
    }

    const indicator = (event : React.MouseEvent<HTMLButtonElement>)=>{
      const value = (event.target as HTMLButtonElement).value;
      setPage(parseInt(value));
    }
  return (
    <Layout {...styles}>
      <div className="common-btn"><button value={"left"} onClick={changeList}>{"◀️"}</button></div>
      <div className="items-box">
        <ul className="items-list">
          {list.map(( el: MenuItems, idx: number )=>{
            return(
              <li className="item" key={idx}><ItemBox items={el}/></li>
            );
          })}
        </ul>
        <div className="current-page">
          {list.map(( el, idx )=>{
            return(
              <button key={idx} value={idx} className={`${page === idx ? "on-color" : "off-color"}`} onClick={indicator}/>
            );
          })}
        </div>
      </div>
      <div className="common-btn"><button value={"right"} onClick={changeList}>{"▶️"}</button></div>
    </Layout>
  );
};
