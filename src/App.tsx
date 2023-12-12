import {Header} from "./components/header"
import {Containor} from "./components/container"

function App() {
  
  return (
    <>
   <Header/>
    <div className="select-none px-2 md:p-4">
   <Containor/>
   </div>
  <div className=" text-gray-400 absolute py-5">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. coded by 
  <a> musinguzi-shafiq</a>.
  </div>
    </>
  )
}

export default App
