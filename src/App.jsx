import { useState } from "react"


function App() {
  const [color, setColor] = useState("Black")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor("red")}
          style={{backgroundColor: "red", fontWeight: 600}}
          >Red</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor("green")}
          style={{backgroundColor: "green", fontWeight: 600}}
          >Green</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor("blue")}
          style={{backgroundColor: "blue", fontWeight: 600}}
          >Blue</button>

          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          onClick={() => setColor("turquoise")}
          style={{backgroundColor: "turquoise", fontWeight: 600}}
          >Turquoise</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor("maroon")}
          style={{backgroundColor: "maroon", fontWeight: 600}}
          >Maroon</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor("gray")}
          style={{backgroundColor: "gray", fontWeight: 600}}
          >Gray</button>

          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          onClick={() => setColor("pink")}
          style={{backgroundColor: "pink", fontWeight: 600}}
          >Pink</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor("orange")}
          style={{backgroundColor: "orange", fontWeight: 600}}
          >Orange</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor("purple")}
          style={{backgroundColor: "purple", fontWeight: 600}}
          >Purple</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor("yellow")}
          style={{backgroundColor: "yellow", fontWeight: 600}}
          >Yellow</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor("yellowgreen")}
          style={{backgroundColor: "yellowgreen", fontWeight: 600}}
          >Yellowgreen</button>
        </div>
      </div>



    </div>
  )
}

export default App
