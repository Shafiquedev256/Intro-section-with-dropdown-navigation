import {Header} from "./components/header"
import {Containor} from "./components/container"

function App() {
  
  return (
    <>
   <Header/>
    <div className="select-none px-2 md:p-4">
   <Containor/>
   </div>
  <div className=" text-gray-400 absolute">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
   <br/> Coded by  <a href="#">www.linkedin.com/in/
musinguzi-shafiq-ug</a>.
  </div>
    </>
  )
}

export default App
