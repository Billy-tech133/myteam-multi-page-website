import Logo from "@/assets/logo.svg"
import { Link } from "react-router-dom"
import facebook from "@/assets/icon-facebook.svg"
import pinterest from "@/assets/icon-pinterest.svg"
import twitter from "@/assets/icon-twitter.svg"
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-dark-green h-auto">
        <div className="flex flex-col items-center text-center text-2xl h-auto py-16 md:block md:w-[80%] md:mx-auto">
            <div className="md:flex md:justify-between">
                <div className="flex flex-col items-center">
                <Link to="/">
                <img src={Logo} alt={`${Logo}`} />
                </Link>
                <ul className="my-8 font-bold">
                    <Link className="mr-2 hover:text-lightcoral" to="/">
                        home
                    </Link>
                    <Link className="ml-2 hover:text-lightcoral" to="/about">
                        about
                    </Link>
                </ul>
                </div>
                <div className="mb-8 text">
                    <p>987 Hillcrest Lane</p>
                    <p>Irvine, CA</p>
                    <p>California 92714</p>
                    <p>Call Us: 949-833-7432</p>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-between" >
            <div className="flex mb-6">
                <Link to="/www.facebook.com">
                <img className="hover:bg-lightcoral" src={facebook} alt={`${facebook}`} />
                </Link>
                <Link className="mx-4 hover:bg-lightcoral" to="/www.pinterest.com">
                    <img src={pinterest} alt={`${pinterest}`} />
                </Link>
                <Link to="/www.twitter.com">
                    <img className="hover:bg-lightcoral" src={twitter} alt={`${twitter}`} />
                </Link>
                </div>
                <p>Copyright 2024. All Right Reserved</p>
            </div>
        </div>   
    </footer>
  )
}

export default Footer