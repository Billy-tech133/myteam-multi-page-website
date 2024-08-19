
import { myContext } from "@/Context"
import { XMarkIcon } from "@heroicons/react/16/solid"
import { Link } from "react-router-dom"
import MenuCircle from "@/assets/bg-pattern-about-1-mobile-nav-1.svg"
type Props = {}

const Menu = (props: Props) => {
  
    const { changeToggleMenu, } = myContext()
  return (
    <div className='fixed bg-midnightgreen right-0 bottom-0 z-40 h-full drop-shadow-2xl w-[65%]'>
        <div className=" flex flex-col justify-between h-[100%]">
            <div className="flex justify-end p-12">
            <button className="" onClick={changeToggleMenu}>
                <XMarkIcon className="h-8 w-8"/>
            </button>
            </div>
            <div className="flex flex-col justify-start items-start ml-[20%] h-[50%]">
            <ul className='flex gap-10 flex-col  items-center'>
                  <li className=' hover:text-lightcoral'>
                    <Link to="/">Home</Link>
                  </li>
                  <li className=' hover:text-lightcoral'>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
                 {/* ContactUs Button */}
              <button className='border-white border-2 hover:text-midnightgreen hover:bg-white rounded-3xl mt-16 py-1 px-4'>
              <Link to="/contactus" className="">
                Contact Us
              </Link>
              </button>
            </div>
            <div className=" relative h-[40%]  " >
              <img src={MenuCircle} alt="menu-circle" className="absolute -right-24 bottom-0 "/>
            </div>
        </div>
    </div>
  )
}

export default Menu