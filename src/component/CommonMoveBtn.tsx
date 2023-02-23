import styled from "styled-components";

interface Props {
    text?: string;
    width?: string;
    radius?: string;
    padding?: string;
    href?: string;
    height?: string
}

const Layout = styled.a<Props>`
color: #FF6767;
display:flex;
justify-content:center;
align-items:center;
font-size: 2rem;
background-color: #FFF7F5;
border: 2px solid #FF6767;
height:${props => props.height ?? "0px"};
width: ${ props => props.width ?? "100%"};
padding: ${ props => props.padding ?? "15px"};
border-radius: ${ props => props.radius ?? "10px"};
cursor: pointer;
`

export const CommonMoveBtn = ({
    text,
    width,
    radius,
    padding,
    href,
    height,
} : Props)=>{
    const styles = {
    width,
    radius,
    padding,
    height
    }
    return(
        <Layout {...styles} href={href}>{text ?? "사용자입력"}</Layout>
    );
}