import { AiOutlineWhatsApp  , AiOutlineLinkedin , AiOutlineInstagram } from "react-icons/ai";

export default function Page1() {
       const config = {
        social:{
               Instagram:' https://www.instagram.com/' ,
               Linkedin :'https://www.linkedin.com/company/login/',
        }
       }

    return <section className="  flex flex-col md:flex-row px-5 py-32  bg-primary justify-center">
        <div className=" md:w-1/2  flex flex-col ">
        <h1 className=" md:w-1/2 text-white text-6xl font-page1-font "> Hi, <br/> Im <span className="text-black">Abishek</span> 
        <p className="text-2xl">Im a Full-stack developer</p>
        </h1>
        <div className="flex py-10">
        <a href="#" className="pr-5 hover:text-white"> <AiOutlineWhatsApp  size={40}/> </a>
        <a href={config.social.Linkedin} className="pr-5 hover:text-white"> <AiOutlineLinkedin size={40} /></a>
        <a href={config.social.Instagram} className="pr-5 hover:text-white"> <AiOutlineInstagram  size={40}/></a>
        </div>
        
        </div>
        
       
        
        <img className="md:w-1/3" src="/assets/hero.png"alt=''/>

    </section>

}