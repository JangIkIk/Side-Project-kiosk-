import styled from "styled-components";
import { CommonTap } from "../component/CommonTap";

const Layout = styled.div`
    height:100%;

    .close{
        font-size:2rem;
        position: fixed;
        top:50%;
        right:2%;
    }
`

function SellerKioskSetting(){
    const page = {
        "추가/삭제": "추가삭제",
        "정렬": "정렬"
    }
    return(
        <Layout>
            <CommonTap
            page={page}
            serch={false}
            />
            <div className="close">취소</div>
        </Layout>
    );
}

export default SellerKioskSetting;