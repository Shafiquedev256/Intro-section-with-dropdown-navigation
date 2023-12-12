import {useState} from "react"
import upIcone from "../assets/icon-arrow-up.svg"
import downIcone from "../assets/icon-arrow-down.svg"
import todoIcone from "../assets/icon-todo.svg"
import calendarIcone from "../assets/icon-calendar.svg"
import remiderIcone from "../assets/icon-todo.svg"
import planningIcone from "../assets/icon-planning.svg"

type Isopen = "open"|"closed"
type DropImg = string 
type Nature = {
 appear: string
}

export const Features = (appear:Nature)=>{
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
   <span className="pr-1.5"> Features</span>
   <img src={imgDrop}/>
    </div>
    {isOpen==="open"&&
    <ul className={`dropdown md:absolute ${appear} bg-white  p-1 rounded mt-0.5 z-10 w-max`}>
    <li className="hover:bg-gray-100 hover:font-bold flex flex-row items-center p-1.5 rounded">
    <img src={todoIcone}/>
    <span className="pl-2">Todo List</span>
    </li>
    <li className="hover:bg-gray-100 hover:font-bold flex flex-row items-center p-1.5 rounded">
     <img src={calendarIcone}/>
     <span className="pl-2">Calendar</span>
    </li>
    <li className="hover:bg-gray-100 hover:font-bold flex flex-row items-center p-1.5 rounded">
     <img src={remiderIcone}/>
   <span className="pl-2">Reminder</span>
    </li>
    <li className="hover:bg-gray-100 hover:font-bold flex flex-row items-center p-1.5 rounded">
   <img src={planningIcone}/>
   <span className="pl-2">Planning</span>
    </li>
    </ul>}
    </div>
    </>
    )
}