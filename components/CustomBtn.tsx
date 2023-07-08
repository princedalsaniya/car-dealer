/*
  Component   : CustomBtn
  Description : This is the custom btn which will be re-used all over the places.
  Params      : title           = Btn text.
                containerStyles = Additional styles wanted to use in btn.
                handleClick     = What we want to do when we click the btn.
  Requires    : None
  Author      : Prince Dalsaniya
*/

'use client'

// Imports
import { CustomButtonProps } from "@/types"

const CustomBtn = ({ title, containerStyles, handleClick } : CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}

export default CustomBtn
