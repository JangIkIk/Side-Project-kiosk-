import styled from "styled-components";
import { CommonBtn } from "../component/CommonBtn";
import { CommonTap } from "../component/CommonTap";
import ProductReception from "./ProductReception";
import ProductComplete from "./ProductComplete";
import ProductCancellation from "./ProductCancellation";

const Layout = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    min-width:900px;
`

const Header = styled.header`
    flex-basis:150px;
    display:flex;
    flex-direction: column;
    
    h1{
        text-align:center;
        flex:1;
        border:1px solid black;
        line-height: 150px;
    }

    .setting{
        position: fixed;
        top: 0px;
    }
`

const Main = styled.main`
    flex:1;
`

function SellerHome(){
    const page = {
        "상픔접수" : <ProductReception/>,
        "상품완료" : <ProductComplete/>,
        "상품취소" : <ProductCancellation/>,
    };
    return(
        <Layout>
            <Header>
                <h1>주문목록</h1>
                <div className="setting">
                    <CommonBtn text="사용자설정" radius="0px"/>
                    <CommonBtn text="키오스크 설정" radius="0px"/>
                </div>
            </Header>
            <Main>
            <CommonTap page={page}/>
            </Main>
        </Layout>
    );
}

export default SellerHome;