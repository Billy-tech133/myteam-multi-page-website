import { Link } from "react-router-dom"
import homeImage6 from "@/assets/bg-pattern-home-6-about-5.svg"
type Props = {}

const GetStarted = (props: Props) => {
  return (
    <div className="relative bg-lightcoral h-auto max-h-[400px]">
        <div className="flex flex-col items-center justify-evenly py-24 md:flex-row md:justify-between md:w-[80%] md:mx-auto">
            <h1 className="text-dark-green font-bold text-3xl">
                Ready to get started?
            </h1>
            <button className='border-dark-green border-2 text-dark-green hover:text-white hover:bg-dark-green rounded-3xl  py-1 px-4 mt-8'>
              <Link to="/contactus" className="">
                Contact Us
              </Link>
              </button>
        </div>
        <img className="absolute bottom-0 left-0" src={homeImage6} alt={`${homeImage6}`} />
    </div>
  )
}

export default GetStarted