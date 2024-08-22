import { Link } from "react-router-dom"
import homeImage6 from "@/assets/bg-pattern-home-6-about-5.svg"
type Props = {}

const GetStarted = (props: Props) => {
  return (
    <div>
        <img src={homeImage6} alt={`${homeImage6}`} />
        <div>
            <h1>
            Ready to get started?
            </h1>
            <button className='border-white border-2 hover:text-midnightgreen hover:bg-white rounded-3xl  py-1 px-4'>
              <Link to="/contactus" className="">
                Contact Us
              </Link>
              </button>
        </div>
    </div>
  )
}

export default GetStarted