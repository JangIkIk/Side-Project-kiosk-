import { CommonBtn } from "../component/CommonBtn";
import styled from "styled-components";
import img from "../asset/겨울.gif";

const Layout = styled.main`
  min-width: 900px;
  height: 100%;
  background: url(${img}) no-repeat center/cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;
`;

function BuyerHome() {
  return (
    <Layout>
      <CommonBtn
      text="매장에서 먹기" 
      width="100%"
      padding="60px"
       />
      <CommonBtn
      text="포장해서 가기" 
      width="100%"
      padding="60px"
       />
    </Layout>
  );
}

export default BuyerHome;
