import {useState} from "react"
import upIcone from "../assets/icon-arrow-up.svg"
import downIcone from "../assets/icon-arrow-down.svg"
type Isopen = "open"|"closed"
type DropImg = string 



export const Company = ()=>{
  const [isOpen,setIsopen] = useState<Isopen>("closed")
  const [imgDrop,setImgDrop] = useState<DropImg>(downIcone)
  
  const handelDropdown = ()=>{
    if(isOpen === "closed"){
    setIsopen("open")
    setImgDrop(upIcone)
    }else{
      setIsopen("closed")
      setImgDrop(downIcone)
    }
  }
  return(
    <>
    <div className="relative select-none">
    <div className="font-bold flex items-center flex-row justify-between" onClick={handelDropdown}>
   <span className="pr-1.5">Company</span>
   <img src={imgDrop}/>
    </div>
    {isOpen==="open"&&
    <ul className={`dropdown md:absolute md:shadow-lg bg-white  p-1 rounded mt-0.5 z-10 w-max`}>
    <li className="hover:bg-gray-100 hover:font-bold flex flex-row items-center p-1.5 rounded">
    <span className="pl-2">History</span>
    </li>
    <li className="hover:bg-gray-100 hover:font-bold flex flex-row items-center p-1.5 rounded">
     <span className="pl-2">OurTeam</span>
    </li>
    <li className="hover:bg-gray-100 hover:font-bold flex flex-row items-center p-1.5 rounded">
   <span className="pl-2">Blog</span>
    </li>
    </ul>}
    </div>
    </>
    )
}