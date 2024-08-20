import { MinusIcon } from "@heroicons/react/16/solid"
import useMediaQuery from "@/hooks/useMediaQuery"
import homeImage2 from "@/assets/bg-pattern-home-2.svg"
import homeImage1 from "@/assets/bg-pattern-home-1.svg"
type Props = {}

const Home = (props: Props) => {

  const mobileScreens = useMediaQuery("(480px)")
  const tabletScreens = useMediaQuery("(760px)")
  return (
    <section className="h-[100%]">
      <div className="flex flex-col  md:max-w-full sm:max-w-3xl mx-auto md:relative">
        <div className="flex flex-col justify-between text-center w-[80%] mx-auto my-16 md:flex-row md:text-start md:items-center md:my-32  ">
          <div className="   md:w-[50%]">
            <h1 className="text-5xl md:text-7xl font-bold mt-0 my-0">Find The Best <span className="text-lightcoral">Talent</span></h1>
          </div>
          <div className=" md:w-[50%] md:ml-24 ">
            <MinusIcon className="hidden md:block h-8 w-12 mb-24 text-raptureblue"/>
            <p className="font-semibold text-lg leading-snug mt-4">Finding the right people and building high performing teams can be hard. 
              Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
          </div>
        </div>
        <img className="hidden md:block md:absolute -left-24 top-1/3 h-48 w-48" src={homeImage1} alt="home-image-1" />
        <img className="md:absolute right-32 bottom-0 max-h-16 mx-auto" src={homeImage2} alt="home-image-2" />
      </div>
      <div></div>
      <div></div>
    </section>
  )
}

export default Home