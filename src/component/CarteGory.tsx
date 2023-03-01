import styled from "styled-components";
import { CommonBtn } from "./CommonBtn";
import { State } from "./CartegorySlide"

interface CarteGoryProps {
  data: State[];
}

const Layout = styled.div`
  height: 100%;
  display: flex;

  .cartegory-box {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    .box-items {
        display:flex;
        padding:10px;
        flex-basis:20%;
        height:50%;
        &::hover:{

        }
    }
  }
`;

export const CarteGory = ({ data }: CarteGoryProps) => {
  return (
    <Layout>
      <div className="cartegory-box">
        {data.map( el => {
          return (
            <div className="box-items" key={el.menuId}>
              <CommonBtn 
              text={el.menuTitle}
              background={"transparent"}
              font={1.5}
               />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
