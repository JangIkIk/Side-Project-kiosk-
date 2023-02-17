import styled from "styled-components";
import { ReactElement } from "react";

const Layout = styled.div`
width:100%;
  display: flex;
  align-items: center;
  gap: 5px;

  label {
    font-size: ${props => props.font ?? props.font};
    width:13rem;
  }

  input {
    padding: 10px;
    flex:1;
    height: 45px;
    border-radius: 5px;
    border: 1px solid red;
  }
`;

interface Props {
  text?: string;
  state?: string | number;
  setState: React.Dispatch<React.SetStateAction<string | number>>;
  holder?: string;
  font? : string;
  label?: boolean;
}

export const CommonInput = ({
  text,
  holder,
  state,
  setState,
  font,
  label,
}: Props): ReactElement => {
    const styles ={font}
  return (
    <Layout {...styles}>
        {label ? <label htmlFor="user">{text}</label> : null}
        <input
          id="user"
          type={typeof state === "number" ? "number" : "text"}
          defaultValue={state}
          onChange={(e) => setState(e.target.value)}
          placeholder={holder}
        />
    </Layout>
  );
};

CommonInput.defaultProps = {
  text: "사용할 이름",
  holder: "",
  font:"2rem",
  label: true,
};
