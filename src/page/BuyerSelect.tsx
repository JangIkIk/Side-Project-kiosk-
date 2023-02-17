import styled from "styled-components"

const Layout = styled.div`
    min-width: 900px;
    height: 100%;
    display:flex;
    flex-direction: column;
`
const Header = styled.header`
    height: 200px;
    background-color:red;
    display:flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    .buyer-title{
        border: 1px solid black;
        font-size: 3rem;
    }
    .buyer-category{
        border: 1px solid black;
    }
`
const Main = styled.main`
    flex:1;
    background-color:blue;
    font-size: 2rem;
    padding: 10px;
    display:flex;
    flex-direction:column;
    gap:10px;

    .buyer-select-list{
        color:white;
        flex:1;
        border: 1px solid black;
    }
`
const Footer = styled.footer`
    font-size: 2rem;
    height: 300px;
    background-color:green;
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
                    <div>슬라이드</div>
                </section>
            </Header>
            <Main>
                <div className="buyer-select-list">이미지라인</div>    
                <div className="buyer-select-list">이미지라인</div>    
                <div className="buyer-select-list">이미지라인</div>    
            </Main>
            <Footer>
                <div className="buyer-item-list">리스트창</div>
                <div className="buyer-calculate">결제창</div>
            </Footer>
        </Layout>
    );
}

export default BuyerSelect;