import { useState } from "react"


function App() {

  let [color, setColor]=useState("Black")

  return (
    <div className="w-full h-screen duration-250" style={{backgroundColor:color}}>
      <div className ="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2
       py-2 rounded-2xl bg-white gap-4 shadow-md" >
        <button
        onClick={()=>setColor("green")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>
          Green
          </button>


          <button 
          onClick={()=>setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>
          Red
          </button>


          <button 
          onClick={()=>setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"yellow"}}>
          Yellow
          </button>

          
          <button 
          onClick={()=>setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"Orange"}}>
        Orange
          </button>


          <button           
          onClick={()=>setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>
          Purple
          </button>
       </div>
    </div>
  )
}

export default App
