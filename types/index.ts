/*
  Description : Here we will declare all the types we are going to use.
  Author      : Prince Dalsaniya
*/

// imports
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>
}
