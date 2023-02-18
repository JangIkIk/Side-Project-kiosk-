import { useState } from "react";
import styled from "styled-components";
import { CommonInput } from "../component/CommonInput";
import { CommonBtn } from "../component/CommonBtn";

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Section = styled.section`
  h2 {
    font-size: 3rem;
    padding-bottom: 50px;
  }
  display: flex;
  width: 450px;
  height: 500px;
  border: 1px solid black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
`;

function SellerHome() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  return (
    <Layout>
      <Section>
        <h2>로그인</h2>
        <CommonInput
          text="아이디"
          state={userId}
          onChange={ e => setUserId(e.target.value)}
          holder={"아이디를 입력해주세요"}
          label={false}
        />
        <CommonInput
          text="비밀번호 확인"
          state={userPassword}
          onChange={ e => setUserPassword(e.target.value)}
          holder={"비밀번호를 입력해주세요"}
          label={false}
        />
          <CommonBtn text="로그인" />
          <CommonBtn text="회원가입"/>
      </Section>
    </Layout>
  );
}

export default SellerHome;
