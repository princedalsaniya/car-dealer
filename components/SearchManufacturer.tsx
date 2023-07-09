/*
  Component   : SearchManufraturee
  Description : This is searchbar for manufracturer. It has autocomplete feature.
  Params      : manufracturer     =>  manufracturer state
                setManufracturer  =>  setter function for manufraturer state
  Requires    : ComboBox => To make searchbar autoComplete
  Author      : Prince Dalsaniya
*/

'use client'

// Imports
import { SearchManufracturerProps } from "@/types"
import { Combobox, Transition } from "@headlessui/react"
import { useState } from "react"
import Image from "next/image"

const SearchManufacturer = ({ manufracturer, setManufracturer } : SearchManufracturerProps) => {
  const [query, setQuery] = useState('')

  return (
    <div className="search-manufracturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='car logo'
            />
          </Combobox.Button>

          <Combobox.Input 
            className='search-manufacturer__input' 
            placeholder="Wolkswagen"
            displayValue={(manufracturer: string) => manufracturer}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
