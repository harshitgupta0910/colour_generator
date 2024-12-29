import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("#e581a7")

  const getRandomColor = () => {
    const letters = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    
    <div className="w-screen h-screen duration-200" style = {{backgroundColor: color}}>
      <h2 className='text-black py-6' > Current color: {color}</h2>
      <div className="fixed flex flex-wrap justify-center top-20 inset-x-0 px-2">
      <button onClick={()=>setColor(getRandomColor())}  className="border-black px-4 py-1 rounded-full text-black shadow-lg " style={{backgroundColor: color}}>Random</button>
      </div>
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
<button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "red"}}>Red</button> 
 {/* after onlick callback function pass */}
<button onClick={()=>setColor("#42cda0")}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "#42cda0"}}>Green</button>
<button onClick={()=>setColor("fuchsia")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "fuchsia"}}>Fuchsia</button>
<button onClick={()=>setColor("cyan")}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "cyan"}}>Cyan</button>
<button onClick={()=>setColor("pink")}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "pink"}}>Pink</button>
<button onClick={()=>setColor("purple")}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>
<button onClick={()=>setColor("lime")}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "lime"}}>Lime</button>
<button onClick={()=>setColor("teal")}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "teal"}}>Teal</button>
</div>
     </div>
    </div>
  )
}

export default App

