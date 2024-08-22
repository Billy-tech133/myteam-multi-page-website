import aboutImage1 from "@/assets/bg-pattern-about-1-mobile-nav-1.svg"
import aboutImage2 from "@/assets/bg-pattern-about-2-contact-1.svg"
import aboutImage3 from "@/assets/bg-pattern-home-4-about-3.svg"
import aboutImage4 from "@/assets/bg-pattern-about-4.svg"
import { MinusIcon, XCircleIcon, PlusCircleIcon } from '@heroicons/react/16/solid'
import { directors } from '@/shared/types'
import Nikita from "@/assets/avatar-nikita.jpg"
import cristian from "@/assets/avatar-christian.jpg"
import cruz from "@/assets/avatar-cruz.jpg"
import drake from "@/assets/avatar-drake.jpg"
import griffin from "@/assets/avatar-griffin.jpg"
import twitter from '@/assets/icon-twitter.svg'
import linkedin from "@/assets/icon-linkedin.svg"
import theVerge from "@/assets/logo-the-verge.png"
import jakartaPost from "@/assets/logo-jakarta-post.png"
import guardian from "@/assets/logo-the-guardian.png"
import techRadar from "@/assets/logo-tech-radar.png"
import gadgetsNow from "@/assets/logo-gadgets-now.png"

const aboutDirectors: Array<directors> = [
  {
    image: Nikita,
    name: "Nikita Marks",
    role: "founder & CEO",

  },
  {
    image: cristian,
    name: "Cristian Duncan",
    role: "co-founder & COO",
  },
  {
    image: cruz,
    name: "Cruz Hamer",
    role: "co-founder & CTO",
  },
  {
  image: drake,
  name: "Drake Heaton",
  role: "Business Development lead",
},
{
image: griffin,
name: "Griffin Wise",
role: "Lead Marketing",
}
]

const clientImages: Array<string> = [theVerge, jakartaPost, guardian, techRadar, gadgetsNow]

const About  = () => {

  return (
    <main className='h-auto overflow-hidden'>
        {/* ABOUT HEADER */}
        <header className='relative m-h-[400px] '>
            <div className='flex flex-col text-center z-40 h-auto w-[80%] mx-auto my-16 md:flex-row items-center md:text-start md:w-[70%] md:justify-between'>
                <h1 className='text-4xl font-bold mb-8'>About</h1>
                <div className='  w-[60%]'>
               <MinusIcon className="hidden text-lightcoral md:block h-12 w-16"/>
                <p className='text-2xl font-semi-bold'>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
                </div>
            </div>
        <img className="absolute -bottom-16 -right-32 -z-2" src={aboutImage1} alt={`${aboutImage1}`} />
        </header>

        {/* ABOUT DIRECTORS */}
        <section className=' bg-deep-jungle-green z-40'>
          <div className='relative'>
          <div className='pt-8'>
            <h1 className='text-center text-4xl z-40 font-bold mt-6'>Meet the directors</h1>
          </div>
          <div className='grid grid-cols-1 justify-center grid-rows-5 gap-8 py-16 md:grid-cols-2 md:grid-rows-2 w-[70%] mx-auto'>
             {aboutDirectors.map((item: directors, index,) => (
              <div className='relative flex flex-col items-center text-center bg-sacramento-state-green max-h-[400px] ' key={index}> 
                <article className=' flex flex-col items-center  content-center my-12'>
                  <img className="rounded-full border-raptureblue border-2 b w-20 h-20" src={item.image} alt={`${item.image}`} />
                  <h3 className="font-bold text-raptureblue mt-2">{item.name}</h3>
                  <p className=''>{item.role}</p>
                </article>
                <PlusCircleIcon className="absolute -bottom-5 h-12 w-12 text-lightcoral"/>
              </div>
             ))}
             <div className="relative flex flex-col items-center text-center bg-sacramento-state-green max-h-[400px]  '">
             <article className='flex flex-col items-center  content-center my-12'>
              <h1 className="text-raptureblue text-2xl font-bold">Aden Allan</h1>
              <p className="text-xl mx-12 my-8">“Empowered teams create truly amazing products. 
                Set the north star and let them follow it.”</p>
                <div className="flex">
                <img className="mr-4" src={twitter} alt={`${twitter}`} />
                <img className="ml-4" src={linkedin} alt={`${twitter}`} />
                </div>
             </article>
             <XCircleIcon className="absolute -bottom-5 h-12 w-12 text-raptureblue"/>
             </div>
          </div>
          <img className='absolute top-0 z-10 -left-32' src={aboutImage2} alt={`${aboutImage2}`} />
          <img className='absolute bottom-0 z-10 right-0' src={aboutImage3} alt={`${aboutImage3}`} />
          </div>
        </section>

        {/* ABOUT CLIENTS */}
        <section className=" relative z-10 bg-sacramento-state-green">
          <img className="absolute top-0 -left-24 z-[-1] mb-10" src={aboutImage4} alt={`${aboutImage4}`} />
          <div className="text-center py-16">
            <div className="text-center">
              <h1 className="text-5xl font-bold pt-12">Some of our clients</h1>
            </div>
            <div className="flex flex-col items-center py-8 md:flex-row md:justify-evenly md:w-[80%] m-auto">
              {clientImages.map((item: string, index) => (
                <img className="w-32 h-8 my-12" key={index} src={item} alt={`${item}`} />
              ))}
            </div>
          </div>

        </section>
    </main>
  )
}

export default About 