import styled from "styled-components";
import { CommonImgBox } from "./CommonImgBox"
import { MenuItem, MenuItems } from './ItemSlide';

const Layout = styled.div`
    height:100%;
    display:flex;
    flex-wrap:wrap;

    .img-box{
        padding:10px;
        flex: 0 0 25%;
    }
   
`

interface ItemBoxProps {
    items: MenuItems;
};

export const ItemBox = ({ items }: ItemBoxProps)=>{
    return(
        <Layout>
            {items?.map((el : MenuItem)=>{
                return(
                    <div key={el.id} className="img-box"><CommonImgBox item={el}/></div>
                );
            })}
        </Layout>
    );
}