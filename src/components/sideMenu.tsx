import closeMenuIcon from "../assets/icon-close-menu.svg"
import {Features} from "./featuresDropdown.tsx"
import {Company} from "./companyDropdown.tsx"

type SideMprops = {
  value:string, 
  change: React.Dispatch<React.SetStateAction<any>>
}



export const SideMenu = (props:SideMprops)=>{
  
  const closeMenu = ()=>{
    if(props.value==="open"){
    props.change("closed")
    }
  }
  
  return(
    <div className="md:hidden bg-[#0000000D] absolute w-screen h-[100%] top-0">
    <div className="h-screen w-52 bg-white   md:hidden right-0 absolute  top-0 px-2">
    <img src={closeMenuIcon} onClick={closeMenu} className="right-0 mr-5 mt-5 absolute"/>
    <div>
    <div className="w-40 h-16"></div>
  <Features/>
   <Company />
    <div className="p-3 border border-[1px] rounded-2xl border-white hover:border-purple-600 text-center mt-3">Login</div>
    <div className="p-3 border border-[1px] rounded-2xl border-black hover:border-purple-600 text-center my-2">Register</div>
    </div>
    </div>
    </div>
    )
}