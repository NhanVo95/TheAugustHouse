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

const buttonDefaultStyles =
  'w-28 h-12 border-2 border-primary rounded-full bg-button-primary bg-opacity-30 selected:bg-button-primary'

const textDefaultStyles = 'text-primary'

const buttonSolidStyles = 'solid:bg-red-500 solid:selected:bg-red-900'

const TAH_Button: React.FC<TAH_ButtonProps> = ({
  variant,
  selected,
  label,
  onClick
}) => {
  return (
    <button
      data-style={variant}
      data-selected={selected}
      className={joinStrings(' ', buttonDefaultStyles, buttonSolidStyles)}
      onClick={onClick}
    >
      <span
        data-style={variant}
        data-selected={selected}
        className={joinStrings(' ', textDefaultStyles)}
      >
        {label}
      </span>
    </button>
  )
}

export default TAH_Button
