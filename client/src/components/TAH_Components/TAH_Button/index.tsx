import React from 'react'
import { joinStrings } from '~/utilities/stringCustom'

interface TAH_ButtonProps {
  variant?: 'glass' | 'solid'
  selected?: boolean
  label: string
  onClick: () => void
}

// .glass {
//   background-color: transparent;
//   color: #007bff;
//   border: 2px solid #007bff;
//   padding: 10px 20px;
//   border-radius: 5px;
//   cursor: pointer;
// }

// .solid {
//   background-color: #007bff;
//   color: #fff;
//   border: 2px solid #007bff;
//   padding: 10px 20px;
//   border-radius: 5px;
//   cursor: pointer;
// }

const buttonSolidStyles = 'solid:bg-red-500 solid:selected:bg-red-900'

const TAH_Button: React.FC<TAH_ButtonProps> = ({
  variant,
  selected,
  label,
  onClick
}) => {
  //SECTION - This is a default button component
  const DefaultButton = () => {
    return (
      <button
        data-selected={selected}
        className='w-28 h-12 border-2 border-primary rounded-full bg-primary bg-opacity-30 selected:bg-primary'
        onClick={onClick}
      >
        <span data-selected={selected} className='text-primary'>
          {label}
        </span>
      </button>
    )
  }
  //!SECTION - This is a default button component

  return <DefaultButton />
}

export default TAH_Button
