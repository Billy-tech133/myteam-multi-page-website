import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from "@/assets/logo.svg"
import Menu from './Menu'
import useMediaQuery from '@/hooks/useMediaQuery'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import { myContext } from '@/Context'






const Navbar = () => {

const {changeToggleMenu, toggleMenu,} = myContext()
const MenuMediaQuery = useMediaQuery('(min-width: 760px)')

  return (
    <nav>
    <div>
      <div className="flex justify-between items-center w-[80%] mx-auto my-auto pt-8 h-20 p-0">
      <Link to="/"> 
          <img className="h-8" src={Logo} alt="home-page" />
      </Link>
      {MenuMediaQuery ? (
                <div className='flex justify-between w-[80%] ml-8 align-items-center'>
                <ul className='flex my-auto'>
                  <li className=' hover:text-lightcoral'>
                    <Link to="/">Home</Link>
                  </li>
                  <li className=' ml-8 md:ml-16 hover:text-lightcoral'>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
                 {/* ContactUs Button */}
              <button className='border-white border-2 hover:text-midnightgreen hover:bg-white rounded-3xl  py-1 px-4'>
              <Link to="/contactus" className="">
                Contact Us
              </Link>
              </button>
            </div>
      ):(
        <button className="rounded-full" onClick={changeToggleMenu}>
          <Bars3Icon className="h-8 w-8 text-white"/>
        </button>
      )}
      </div>
    </div>
    {/* <Menu /> */}
    {!MenuMediaQuery && toggleMenu && (
    <Menu />
    )}
    </nav>
  )
}

export default Navbar