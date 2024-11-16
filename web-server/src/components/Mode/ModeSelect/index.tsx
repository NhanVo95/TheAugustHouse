'use client'

import { useTheme } from 'next-themes'
import './style.css'

import TAH_DropdownMenu from '~/components/TAH_Components/TAH_DropdownMenu'

function ModeSelect() {
  const { theme, setTheme } = useTheme()

  const handleChange = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLButtonElement
    let selectedMode: string = 'system'

    switch (target.innerText.toLowerCase()) {
      case 'light':
        selectedMode = 'light'
        break
      case 'dark':
        selectedMode = 'dark'
        break

      default:
        selectedMode = 'system'
        break
    }

    if (theme != selectedMode) {
      setTheme(selectedMode)
    }
  }

  return (
    <div onClick={handleChange}>
      <TAH_DropdownMenu selected='Dark' items={['System', 'Light', 'Dark']} />
    </div>
  )
}

export default ModeSelect
