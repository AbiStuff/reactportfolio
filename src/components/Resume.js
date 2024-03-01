
export default function Resume(){
    const config = {
        link: 'https://drive.google.com/drive/my-drive',
    }
    return<section className="flex  flex-col md:flex-row bg-secondary px-5" id="resume">
        <div className=" md:w-1/2 flex  md:justify-center justify-end ">
            <img  className="w-[300px]" src="/assets/resume.jpg" alt="" />
        </div>

        <div className=" md:w-1/2 flex justify-center">
            <div className="flex flex-col justify-center text-white">
               <h1 className="text-4xl  border-b-4  border-white mb-5 w-[140px] font-bold">Resume</h1>
               <p className="pb-5">You can view my resume <a className=" bg-primary px-5 py-2 font-bold  hover:border-2 border-secondary rounded" href={config.link}>Download</a></p>
            </div>   
        </div>
    </section>
}