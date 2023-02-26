import styled from "styled-components"
import { CartegorySlide } from "../component/CartegorySlide"
import { ItemSlide } from "../component/ItemSlide"

const Layout = styled.div`
    min-width: 900px;
    display:flex;
    flex-direction: column;
    background-color:#ffa6b7;
`
const Header = styled.header`
    display:flex;
    padding: 10px;
    flex-direction: column;
    .buyer-title{
        padding: 10px;
        text-align: center;
        font-size: 3rem;
    }
    .buyer-category{
        flex:1;
    }
`
const Main = styled.main`
    flex:1;
    font-size: 2rem;
    padding: 10px;
    display:flex;

    .buyer-select-list{
        color:white;
        flex:1;
    }
`
const Footer = styled.footer`
    font-size: 2rem;
    display:flex;
    .buyer-item-list{
        flex:2;
        border: 1px solid black;
    }

    .buyer-calculate{
        flex:1;
        border: 1px solid black;
    }
`
function BuyerSelect(){

    return(
        <Layout>
            <Header>
                <h1 className="buyer-title">키오스크 제목</h1>
                <section className="buyer-category">
                    <CartegorySlide/>
                </section>
            </Header>
            <Main>
                <div className="buyer-select-list">
                    <ItemSlide/>
                </div>     
            </Main>
            <Footer>
                <div className="buyer-item-list">리스트창</div>
                <div className="buyer-calculate">결제창</div>
            </Footer>
        </Layout>
    );
}

export default BuyerSelect;