
export default function About(){
    return<section className="flex  flex-col md:flex-row bg-secondary px-5" id="about">
        <div className=" md:w-1/2 ">
            <img src="/assets/about.png" alt="" />
        </div>

        <div className=" py-5md:w-1/2 flex justify-center">
            <div className="flex flex-col justify-center text-white">
               <h1 className="text-4xl  border-b-4  border-white mb-5 w-[170px] font-bold">About me</h1>
               <p className="pb-5 ">Hi My name is I Abishek. I am a Full stack web developer. I build Few projects 
                  with React.js Using tailwindCSS,</p>
               <p className=" pb-5">  I am Passionate in Learning Software And Designing .To make a
                  Career in Which I was Useful To industry, develop my skill and
                  To have a growth in field on which I will be dedicated.</p>
                <p className=" pb-5">In backend I know Node.js Express.js, Python and SQL.</p>  
               
              
               
              
            </div>   
        </div>
    </section>
}