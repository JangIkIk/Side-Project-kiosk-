import styled from "styled-components";
import { CommonInput } from "../component/CommonInput";
import { CommonBtn } from "../component/CommonBtn";

const Layout = styled.div`
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.33);
  

  .modal{
    border:1px solid black;
    padding:10px;
    display: flex;
    flex-direction: column;
    gap:5px;
  }

  .check {
    width: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
  }
`;

function SellerJoin() {
  return (
    <Layout>
      <div className="modal">
      <CommonInput text="상호명" />
      <CommonInput text="사용자명" />
      <div className="check">
        <CommonInput text="아이디" />
        <CommonBtn padding={"10px"} text="중복확인" />
      </div>
      <CommonInput
      text="비밀번호"
      />
      <CommonInput
      text="비밀번호 확인"
      />
      <div className="check">
        <CommonInput text="이메일" />
        <CommonBtn padding={"10px"} text="중복확인" />
      </div>
      <div className="check">
        <CommonInput text="휴대폰" />
        <CommonBtn padding={"10px"} text="인증번호 받기" />
      </div>
      <div className="check">
        <CommonInput 
        text="생년월일" />
      </div>
      <div className="check"><input type="checkbox"/><span>{'전체동의하기'}</span></div>
      <div className="check"><input type="checkbox"/><span>{'이용약관 동의(필수)'}</span></div>
      <div className="check"><input type="checkbox"/><span>{'개인정보 수집 및 이용동의(필수)'}</span></div>
      <CommonBtn padding={"10px"} text="가입하기"/>
      <CommonBtn padding={"10px"} text="취소"/>
      </div>
    </Layout>
  );
}

export default SellerJoin;
