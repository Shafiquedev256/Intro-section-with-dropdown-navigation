import {useState} from "react"
import logo from "../assets/logo.svg"
import menuIcone from "../assets/icon-menu.svg"
import {Features} from "./featuresDropdown.tsx"
import {Company} from "./companyDropdown.tsx"
import {SideMenu} from "./sideMenu"

type Sidemenu = "open"|"closed"


export const Header = ()=>{
  const [isOpen,setIsopen]=useState<Sidemenu>("closed")
  const handeOpen = ()=>{
    if(isOpen ==="closed"){
      setIsopen("open")
    }
  }
  
  return(
    <>
    <div className="bg-white p-3 flex flex-row items-center justify-between select-none">
    <div className="flex flex-row justify-between  w-2/4">
    <img src={logo}/>
   <span className="hidden md:block"> <Features appear=" shadow-lg"/></span>
    <span className="hidden md:block"><Company appear=" shadow-lg"/></span>
    <div className="font-bold hidden md:block">Careers</div>
    <div className="font-bold hidden md:block">About</div>
    </div>
    
    
    <img src={menuIcone} className="md:hidden" onClick={handeOpen}/>
    
    <div className="hidden md:block md:flex md:flex-row md:justify-between w-52 font-bold">
    <div className="p-3 border border-[1px] rounded-2xl border-white hover:border-purple-600">Login</div>
    <div className="p-3 border border-[1px] rounded-2xl border-black hover:border-purple-600">Register</div>
    </div>
    </div>
    
    {isOpen==="open"&&<SideMenu value={isOpen} change={setIsopen}/> }
    </>
    )
}