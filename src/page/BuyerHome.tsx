import styled from "styled-components";
import img from "../asset/home1.png";
import { CommonMoveBtn } from "../component/CommonMoveBtn";

const Layout = styled.main`
  position: relative;
  min-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 5px;
  .click-btns{
    bottom:5px;
    left:0;
    right:0;
    display:flex;
    position: absolute;
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

function BuyerHome() {
  return (
    <Layout>
      <img src={img} />
      <div className="click-btns">
        <CommonMoveBtn text="먹고가기" height="100px" href="/select" />
        <CommonMoveBtn text="포장하기" height="100px" href="/select" />
      </div>
    </Layout>
  );
}

export default BuyerHome;
