import { ReactElement } from "react";
import styled from "styled-components";


const Layout = styled.button`
    color: white;
    font-size: 2rem;
    background-color: #0500FF;
    width: ${props => props.width ? props.width : "150px"};
    padding: ${props => props.padding ? props.padding : "15px"};
    border-radius: ${props => props.radius ? props.radius : "10px"};
    cursor: pointer;
`

interface Props {
    text?: string;
    width?: string;
    radius?: string;
    padding?: string;
}

const CommonBtn = ({text, width, radius, padding} : Props) : ReactElement=>{
    const styles = {
        width,radius,padding
    }
    return(
        <Layout {...styles}>{text}</Layout>
    )
}

CommonBtn.defaultProps={
    text: "버튼",
}

export default CommonBtn;