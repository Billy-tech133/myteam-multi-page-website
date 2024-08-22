
import { contactUs } from "@/shared/types"
import personIcon from "@/assets/icon-person.svg"
import cogIcon from "@/assets/icon-cog.svg"
import chartIcon from "@/assets/icon-chart.svg"
import { useForm } from "react-hook-form"
import contactImage1 from "@/assets/bg-pattern-about-2-contact-1.svg"
import contactImage2 from "@/assets/bg-pattern-contact-2.svg"
import { useState, useEffect } from "react"

const contacts: Array<contactUs> = [
    {
    icon:  personIcon,
    desc: "The quality of our talent network"
    },
    {
    icon:  cogIcon,
    desc: "Usage & implementation of our software"
    },
    {
    icon:  chartIcon,
    desc: "How we help drive innovation"
    }
]


const ContactUs = () => {

    const {register, trigger, formState: {errors}} = useForm()

    const handleSubmit = async (e: any) => {
        const isValid = await trigger()
        if(!isValid) {
            e.preventDefault()
        }
    }



    
const inputStyles = `py-6 bg-midnightgreen text-2xl text-white border-b-[2px] w-[100%] focus:outline-none focus:border-b-blue-300 focus:font-bold ${errors ?  ("border-b-red-200 text-lightcoral") : ("border-b-white-200 text-white")} `
  return (
    <main className="relative overflow-hidden bg-midnightgreen">
        
        <img className="hidden xl:block xl:absolute top-32 -left-24 " src={contactImage1} alt={`${contactImage1}`} />
        <img className="absolute -bottom-24 -right-28" src={contactImage2} alt={`${contactImage2}`} />

        {/* CONTACT US HEADER SECTION */}
        <section className="h-auto">
            <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-between  xl:w-[80%] mx-auto xl:my-24 ">
                <div className=" flex flex-col justify-center mb-16">
                <header className="text-center font-bold my-16 xl:mx-0" >
                    <h1 className="text-5xl">Contact</h1>
                    <h3 className="text-4xl text-lightcoral">Ask us about</h3>
                </header>
                    <article className="s">
                        {contacts.map((item: contactUs, index)=> (
                        <div key={index} className="flex items-center text-center mt-4">
                            <img src={item.icon} alt="" />
                            <p className="text-start font-bold ml-6">{item.desc}</p>
                        </div> 
                        ))}
                    </article>
                </div>

                {/* FORM SECTION */} 
                <form onSubmit={handleSubmit} className="flex flex-col items-start w-[80%] mx-auto xl:mx-0 mb-16 hover:cursor-pointer max-w-[50%] ">
                    <input 
                    className={`${inputStyles}`}
                     type="text" 
                     id="name"
                     placeholder="Name"
                     {...register('name', { required: true, maxLength: 100})}
                       />
                       {errors.name && (<p className="text-2xl text-lightcoral mt-4">{errors.name.type === "required" && "This field is required"}
                       {errors.name.type === "maxLength" && "Max length is 2000 char"}</p>)}
                    <input 
                    className={`${inputStyles}`}
                    type="text" 
                    id="email" 
                    placeholder="Email Address"
                    {...register('email', 
                        {required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
                    )}
                     />
                     {errors.email &&( <p className="text-2xl text-lightcoral mt-4">{ errors.email.type === "required" && "Email field cannot be empty"} {errors.email.type = "pattern" && "Invalid email address"}</p> )}
                    <input 
                    className={`${inputStyles}`}
                    type="text" 
                    id="company" 
                    placeholder="Company Name" 
                    {...register('company', {required: true, maxLength: 100})}
                    />
                    {errors.company && (<p className="text-2xl text-lightcoral mt-4">{errors.company.type === "required" && "Company name is required"}{errors.company.type === "Max length is 200 char"}</p>)}
                    <input 
                    className={`${inputStyles}`}
                    type="text"
                     id="title" 
                     placeholder="Title" 
                    {...register('title', {required: true, maxLength: 100})}

                     />
                    {errors.title && (<p className="text-2xl text-lightcoral mt-4">{errors.title.type === "required" && "title name is required"}{errors.title.type === "Max length is 200 char"}</p>)}

                    <textarea 
                    className={`${inputStyles}`}
                     placeholder="message" 
                     {...register('message', {required: true, maxLength: 100})}
                     />
                     {errors.message && (<p className="text-2xl text-lightcoral mt-4">{errors.message.type === "required" && "message is required"}{errors.message.type === "Max length is 200 char"}</p>)}

                     <button
                      type="submit" 
                      className="px-8 py-4 font-bold rounded-3xl bg-white text-dark-green hover:bg-raptureblue mt-16"  
                      >Submit</button >
                </form>
            </div>
        </section>
    </main>
  )
}

export default ContactUs