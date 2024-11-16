import ModeToggle from '~/components/Mode/ModeToggle'

import { CiLocationOn, CiMail } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'

const HeaderTop = () => {
  return (
    <nav
      className={
        'bg-[#F9F6F3]/[1] flex justify-between items-center pt-[.25rem] pb-[.25rem] pl-[5rem] pr-[5rem]'
      }
    >
      <div className='flex gap-[1em]'>
        <div className='flex justify-center items-center gap-[.25em]'>
          <CiLocationOn />
          <p>18 Tu Do</p>
        </div>

        <div className='flex justify-center items-center gap-[.25em]'>
          <FiPhone />
          <p>0967619672</p>
        </div>

        <div className='flex justify-center items-center gap-[.25em]'>
          <CiMail />
          <p>thanhnhan140395@gmail.com</p>
        </div>
      </div>
      <div className='flex items-center gap-[1em]'>
        <ModeToggle />
        <FaFacebook />
        <FaTwitter />
        <FaLinkedin />
        <FaInstagram />
        <FaYoutube />
      </div>
    </nav>
  )
}

export default HeaderTop
