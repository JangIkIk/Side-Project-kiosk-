import "./App.css";
import BuyerHome from "./page/BuyerHome";
import BuyerSelect from "./page/BuyerSelect";
import SellerLogin from "./page/SellerLogin";
import SellerJoin from "./page/SellerJoin";
import SellerHome from "./page/SellerHome";
import SellerKioskSetting from "./page/SellerKioskSetting"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductCancellation from "./page/ProductCancellation";
import ProductCosmplete from "./page/ProductComplete";
import ProductReception from "./page/ProductReception";
import ProductCD from "./page/ProductCD";
import ProductSort from "./page/ProductSort";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BuyerHome/>}/>
          <Route path="/select" element={<BuyerSelect/>}/>
        </Routes>

        {/* <SellerLogin/> */}
        {/* seller/login -> 판매자 로그인페이지*/}

        {/* <SellerJoin/> */}
        {/* seller/join -> 판매자 회원가입(모달)*/}

        {/* <SellerHome /> */}
        {/* seller/home -> 판매자 주문목록(부모)*/}
        {/* --child-- <ProductReception/> */}
        {/* --child-- seller/home/reception */}
        {/* --child-- <ProductComplete/> */}
        {/* --child-- seller/home/complete */}
        {/* --child-- <ProductCancellation/>*/}
        {/* --child-- seller/home/cancellation */}
        {/* <SellerKioskSetting/> */}
        {/* seller/kiosksetting -> 판매자 키오스크 설정 */}
        {/* <ProductCD/> */}
        {/* seller/kiosksetting/ad -> 판매자 키오스크 추가/삭제 */}
        {/* <ProductSort/> */}
        {/* seller/kiosksetting/sort -> 판매자 키오스크 정렬 */}

      </BrowserRouter>
    </div>
  );
}

export default App;
