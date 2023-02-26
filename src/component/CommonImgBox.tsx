import styled from "styled-components";
import { MenuItem } from './ItemSlide';

const Layout = styled.div`
    border:1px solid black;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
    cursor:pointer;

    .imgs{
        padding: 10px;
        display:flex;
        img{
            width:100%;
        }
    }

    p{
        font-size:1.7rem;
    }
`
interface CommonImgBoxProps {
    item: MenuItem
}

export const CommonImgBox = ({item} : CommonImgBoxProps)=>{
    return(
        <Layout>
            <div className="imgs"><img src={item.imges} alt={item.name} /></div>
            <p>{item.name}</p>
            <p>{`${item.price.toLocaleString()}원`}</p>
        </Layout>
    );
}