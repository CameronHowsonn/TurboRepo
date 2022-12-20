import * as React from "react";
import styled from "styled-components";

export interface ButtonProps {
  type: string;
}

export const Button = ({ type }: ButtonProps) => {
  return <CustomButton className={type}>{type}</CustomButton>;
};

const CustomButton = styled.button``;
