'use-client'

import { useState } from 'react'

import styles from './style.module.css'

const TAH_DropdownMenu = (props: { selected: string; items: string[] }) => {
  const [opened, setOpened] = useState(false)
  const [selected, setSelected] = useState(props.selected)

  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <div
          className={
            opened
              ? `${styles.select} ${styles.selectClicked}`
              : `${styles.select}`
          }
          onClick={() => {
            setOpened(!opened)
          }}
        >
          <span className={styles.selected}>{selected}</span>
          <div
            className={
              opened
                ? `${styles.caret} ${styles.caretRotate}`
                : `${styles.caret}`
            }
          ></div>
        </div>

        <ul
          className={
            opened ? `${styles.menu} ${styles.menuOpen}` : `${styles.menu}`
          }
        >
          {props.items?.map((item, index) => {
            return (
              <li
                key={item + index}
                className={selected == item ? styles.active : ''}
                onClick={(event) => {
                  const target = event.target as HTMLButtonElement
                  let selectedMode: string = target.innerText

                  setSelected(selectedMode)
                  setOpened(false)
                }}
              >
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default TAH_DropdownMenu
