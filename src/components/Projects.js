export default function Projects(){
    return<section className=" flex flex-col py-20 px-5 justify-center bg-primary text-white" id="project">
        <div className="w-full">
            <div className=" flex  flex-col  px-28 py-5">
              <h1 className="text-4xl  border-b-4  border-white mb-5 w-[140px] font-bold">Projects</h1>
              <p>This is my final year project, My project title is :Tracking device using IOT to detect the object,</p>
            </div> 
        </div>
        <div className="w-full">
            <div className="flex flex-col  md:flex-row px-10 gap-5">
                <div className=" relative">
                  <img  className="h-[200px] w-[500] leading-5  md:justify-center px-20" src="/assets/Picture.png"/> 
                  <div className=" absolutele left-0 right-0 bottom-[45px] top-0  opacity-0 duration-500 hover:opacity-100">
                    <p className="text-center px-5 py-5">
                    Showcase a functional prototype of the IoT-based tracking device, highlighting its form factor, components, and 
                    key features such as real-time location tracking and environmental monitoring.
                    </p>
                  </div>
                </div>
               <div className="relative">
                <img  className="h-[200px] w-[500]  leading-5  md:items-center pl-36 " src="/assets/Picture1.png"/>
                <div className="absolutele left-0 right-0 bottom-[45px] top-0  opacity-0 duration-500 hover:opacity-100">
                    <p className="text-center px-5 py-5">
                    Present the user interface of the tracking system, whether it's a mobile app or web portal. Emphasize its ease of 
                    use, real-time data visualization, and the ability to generate reports.
                    </p>
                </div>
               </div>
               <div className="relative">
              <img  className="h-[200px]  w-[500] leading-5  md:items-center pl-36" src="/assets/Picture2.png"/>
              <div className="absolutele left-0 right-0 bottom-[45px] top-0  opacity-0 duration-500 hover:opacity-100">
                <p className=" text-center px-5 py-5">
                Conduct live demonstrations of the tracking device in action.
                Display its capability to track assets, provid real-time data, and seamlessly integrate with existing systems. </p>
              </div>
              </div>
            </div>
            
            
                
        </div>
    </section>
}