import image_hero_mobile from "../assets/image-hero-mobile.png"
import image_hero_desktop from "../assets/image-hero-desktop.png"
import image_databiz from "../assets/client-databiz.svg"
import image_audip from "../assets/client-audiophile.svg"
import image_meet from "../assets/client-meet.svg"
import image_maker from "../assets/client-maker.svg"
export const Containor = ()=>{
  
  return(
    <>
    <div className="md:flex flex-row ">
    <img src={image_hero_mobile} className="md:hidden"/>
    <div className="text-center md:text-left text-gray-600 p-2 md:flex md:flex-col justify-evenly md:w-3/5">
 <h1 className="text-4xl md:text-8xl  font-bold py-2 text-black">Make remote work</h1>

  <div className="md:w-80 px-3 md:px-0">Get your team in sync, no matter your location.Streamline processes, 
  create team rituals, and watch productivity soar.</div>

 <button className="bg-black text-white font-bold px-4 py-3 rounded-2xl my-1 md:w-fit "> Learn more</button>
    </div>
    <img src={image_hero_desktop} className="md:block hidden w-2/5"/>
    </div>
    <div className="flex flex-row justify-evenly items-center mt-3">
    <img src={image_databiz}/>
    <img src={image_audip}/>
    <img src={image_meet}/>
    <img src={image_maker}/>
    </div>
    </>
    )
}