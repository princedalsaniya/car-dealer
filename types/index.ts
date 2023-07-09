/*
  Description : Here we will declare all the types we are going to use.
  Author      : Prince Dalsaniya
*/

// imports
import React, { MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: "button" | "submit"
}

export interface SearchManufracturerProps {
  manufacturer: string,
  setManufacturer: (manufracturer: string) => void;
}
