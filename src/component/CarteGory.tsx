import styled from "styled-components";
import { CommonBtn } from "./CommonBtn";

interface Props {
  data: Object[];
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

export const CarteGory = ({ data }: Props) => {
  return (
    <Layout>
      <div className="cartegory-box">
        {data.map((el : {id: number , title:string}) => {
          return (
            <div className="box-items" key={el.id}>
              <CommonBtn 
              text={el.title}
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
