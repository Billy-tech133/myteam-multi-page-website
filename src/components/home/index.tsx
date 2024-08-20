import { MinusIcon } from "@heroicons/react/16/solid"
import useMediaQuery from "@/hooks/useMediaQuery"
import { teamType } from "@/shared/types"
import { successStoryType } from "@/shared/types"
import homeImage2 from "@/assets/bg-pattern-home-2.svg"
import homeImage1 from "@/assets/bg-pattern-home-1.svg"
import homeImage3 from "@/assets/bg-pattern-home-3.svg"
import homeImage4 from "@/assets/bg-pattern-home-4-about-3.svg"
import homeImage5 from "@/assets/bg-pattern-home-5.svg"
import personIcon from "@/assets/icon-person.svg"
import cogIcon from "@/assets/icon-cog.svg"
import chartIcon from "@/assets/icon-chart.svg"
import qoute from "@/assets/icon-quotes.svg"
import KadyImage from "@/assets/avatar-kady.jpg"
import AiyshaImage from "@/assets/avatar-aiysha.jpg"
import ArthurImage from "@/assets/avatar-arthur.jpg"


const teams: Array<teamType> = [
  {
    icon: personIcon,
    title: "Experienced Individuals",
    desc: "Our network is made up of highly experienced professionals who are passionate about what they do."
  },
  {
    icon: cogIcon,
    title: "Easy to Implement",
    desc: "Our processes have been refined over years of implementation meaning our teams always deliver."
  },
  {
    icon: chartIcon,
    title: "Enhanced Productivity",
    desc: "Our customized platform with in-built analytics helps you manage your distributed teams."
  }
]

const storries: Array<successStoryType> = [
  {
    qouteImage: qoute,
    personImage: KadyImage,
    name: "Kady Baker",
    role: "Product Manager at Bookmark",
    story: " “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”"
  },
  {
    qouteImage: qoute,
    personImage: AiyshaImage,
    name: "Aiysha Reese",
    role: "Founder of Manage",
    story: " “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”"
  },
  {
    qouteImage: qoute,
    personImage: ArthurImage,
    name: "Arthur Clarke",
    role: "Co-founder of MyPhysio",
    story: " “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”"
  },
]

const Home = () => {



  return (
    <section className="h-auto">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:h-5/6  md-screen md:max-w-full sm:max-w-3xl mx-auto md:relative">
        <div className="flex flex-col justify-between text-center w-[70%] mx-auto my-32 md:flex-row md:text-start md:items-center md:my-32  ">
          <div className=" md:w-[50%]">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mt-0 my-0">Find The Best <span className="text-lightcoral">Talent</span></h1>
          </div>
          <div className="md:w-[50%] md:ml-24 ">
            <MinusIcon className="hidden md:block h-8 w-12 mb-24 text-raptureblue"/>
            <p className="font-semibold text-lg leading-snug mt-4">Finding the right people and building high performing teams can be hard. 
              Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
          </div>
        </div>
        <img className="hidden md:block md:absolute -left-24 top-1/3 h-48 w-48" src={homeImage1} alt="home-image-1" />
        <img className="md:absolute sm:max-w-64 m-auto right-32 bottom-0 max-h-16" src={homeImage2} alt="home-image-2" />
      </div>

      {/* TEAMS SECTION  */}
      <div className=" relative overflow-x-hidden bg-sacramento-state-green h-auto ">
          <img className="absolute -right-24 md:bottom-0" src={homeImage3} alt="home" />
        <div className="md:flex justify-between h-90 w-[90%] sm:w-[80%] mx-auto my-16 ">
          <div className="w-[60%] md:w-[50%] md:mr-24">
            <MinusIcon className="text-lightcoral md:block h-12 w-16"/>
            <h1 className="font-bold text-3xl sm:text-5xl">Build & manage distributed teams like no one else.</h1>
          </div>
          <div className="md:w-[50%]">
            {teams.map((item: teamType, index) => (
            <div className="flex flex-col justify-evenly items-center text-center mt-12 sm:text-start sm:items-start sm:flex-row " key={index}>
              <img className="h-24 w-24 sm:mr-8" src={item.icon} alt={`${item.icon}`} />
              <div>
                <h2 className="text-lightcoral text-xl font-bold sm:mb-6 ">{item.title}</h2>
                <p className="leadind-snug text-2xl md:text-xl">{item.desc}</p>
              </div>
             </div>
            ))}
          </div>
        </div>
      </div>

      {/* SUCCESS STORIES SECTION*/}
      <div className="relative bg-midnightgreen">
        <img src={homeImage4} alt={`${homeImage4}`} />
        <img className="absolute bottom-0 right-0" src={homeImage5} alt={`${homeImage5}`} />
        <div className="flex flex-col text-center w-[90%] my-16 mx-auto md:w-[80%]">
            <h1 className="font-bold text-3xl sm:text-5xl">Delivering real results for top companies. Some of our <span className="text-raptureblue">success stories.</span></h1>
          <div className="md:flex justify-between">
            {storries.map((item: successStoryType, index) =>(
              <div className="relative  flex flex-col justify-between items-center my-12 md:max-w-[33.3%]" key={index}>
                <img className="absolute -top-6" src={item.qouteImage} alt={`${item.qouteImage}`}/>
                <p className="my-4 text-xl z-40 md:text-xl">{item.story}</p>
                <h3 className="font-bold text-raptureblue mt-2">{item.name}</h3>
                <p className="mb-4"><span>{item.role}</span></p>
                <img className="rounded-full border-raptureblue border-2 b w-16 h-16" src={item.personImage} alt={`${item.personImage}`}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home