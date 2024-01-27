import { useState } from 'react'


function App() {
 const [color, setColor] = useState('orange')

  return (

     <div className='w-full h-screen duration-200' style= {{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl
'>
<button onClick={()=> setColor('red')} className=' outline-none px-4 py-1 rounded-full text-black'style = {{backgroundColor: "red"}}>Red</button>
<button onClick={()=> setColor('Aqua')} className='outline-none px-4 py-1 rounded-full text-white 'style={{backgroundColor: "Aqua"}}>Aqua</button>
<button onClick={()=> setColor('Black')} className='outline-none px-4 py-1 rounded-full text-white 'style={{backgroundColor: "Black"}}>Black</button>
<button onClick={()=> setColor('Blue')} className='outline-none px-4 py-1 rounded-full text-white 'style={{backgroundColor: "blue"}}>blue</button>
<button onClick={()=> setColor('Fuchsia')} className='outline-none px-4 py-1 rounded-full text-white 'style={{backgroundColor: "Fuchsia"}}>Fuchsia</button>
<button onClick={()=> setColor('Gray')} className='outline-none px-4 py-1 rounded-full text-white 'style={{backgroundColor: "Gray"}}>Gray</button>
<button onClick={()=> setColor('Green')} className='outline-none px-4 py-1 rounded-full text-white 'style={{backgroundColor: "Green"}}>Green</button>
<button onClick={()=> setColor('Lime')} className='outline-none px-4 py-1 rounded-full text-white 'style={{backgroundColor: "Lime"}}>Lime</button>
<button onClick={()=> setColor('Maroon')} className='outline-none px-4 py-1 rounded-full text-white 'style={{backgroundColor: "Maroon"}}>Maroon</button>
<button onClick={()=> setColor('Teal')} className='outline-none px-4 py-1 rounded-full text-white 'style={{backgroundColor: "Teal"}}>Teal</button>
        </div>
      </div>
     </div>
   
  )
}

export default App
