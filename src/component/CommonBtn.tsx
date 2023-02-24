import styled from "styled-components";
import * as React from "react";

interface Props {
    text?: string;
    width?: string;
    radius?: string;
    padding?: string;
    font?: number;
    background?: string;
}
  

const Layout = styled.button<Props>`
  color: black;
  font-size: ${ props => props.font ?? 2}rem;
  background-color: ${ props => props.background ?? "#0500ff"};
  width: ${ props => props.width ?? "100%"};
  padding: ${ props => props.padding ?? "15px"};
  border-radius: ${ props => props.radius ?? "10px"};
  cursor: pointer;
  font-weight: bolder;

  &:hover{
    background-color:gray;
    color:white;
  }
`;

export const CommonBtn = ({
  text,
  width,
  radius,
  padding,
  font,
  background,
}: Props): JSX.Element => {

  const styles = {
    width,
    radius,
    padding,
    font,
    background,
  };
  return <Layout {...styles}>{text ?? "사용자입력"}</Layout>;
};