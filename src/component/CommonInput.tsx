import styled from "styled-components";

interface Props {
  text?: string;
  state?: string | number;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  holder?: string;
  font? : string;
  label?: boolean;
}

const Layout = styled.div<Props>`
  width:100%;
  display: flex;
  align-items: center;
  gap: 5px;

  label{
    font-size: ${ props => props.font ?? "2rem"};
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

export const CommonInput = ({
  text,
  holder,
  state,
  onChange,
  font,
  label = true
}: Props): JSX.Element => {
    const styles ={font}
  return (
    <Layout {...styles}>
        {label ? <label htmlFor="user">{text ?? "사용자입력"}</label> : null}
        <input
          id="user"
          type={typeof state === "number" ? "number" : "text"}
          defaultValue={state}
          onChange={onChange}
          placeholder={holder ?? "사용자입력"}
        />
    </Layout>
  );
};