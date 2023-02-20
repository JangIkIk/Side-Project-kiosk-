import styled from "styled-components";


interface Props {
    text?: string;
    width?: string;
    radius?: string;
    padding?: string;
}
  

const Layout = styled.button<Props>`
  color: white;
  font-size: 2rem;
  background-color: #0500ff;
  width: ${ props => props.width ?? "100%"};
  padding: ${ props => props.padding ?? "15px"};
  border-radius: ${ props => props.radius ?? "10px"};
  cursor: pointer;
`;

export const CommonBtn = ({
  text,
  width,
  radius,
  padding,
}: Props): JSX.Element => {
  const styles = {
    width,
    radius,
    padding,
  };
  return <Layout {...styles}>{text ?? "사용자입력"}</Layout>;
};