import { useState } from "react"

function App() {

 
  let [title, setTitle] = useState("Starting click game => Snake with useState, Good Luck!")

  let [value, setValue] = useState("")

  const clickHandler = () => {
    setTitle("Start!") && (setValue(""))
  }

  const clickValue = () => {
    setValue(value + "neverendingsnake!")
  }

  return (
    <div>
      <h1>{title}</h1>
      <h2>{value}</h2>
      <section>
        <button type="button" className="button" onClick={clickHandler}>Start / Reset</button>
        <button type="button" className="button" onClick={clickValue}>Click to move </button>
      </section>
    </div>
  );
}

export default App;