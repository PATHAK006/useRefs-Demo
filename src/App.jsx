import React, {useState, useEffect, useRef} from 'react'
import './App.css'

function App() {

  const [text,setText] = useState("")
  const count = useRef(0)
  const focusElement = useRef()
  const prevName = useRef('')

  // const counter = useRef(count)

  useEffect(() => {
    
    count.current = count.current + 1
    prevName.current = text
    
  })
  
 
  const handleChange = (e) => {
    setText(e.target.value)
  }
  
  const handleFocus = () => {
    focusElement.current.focus()
  }


  return (
    <div className="App">
      <input ref={focusElement} value={text} type="text" onChange={handleChange} /> 
      <button onFocus={handleFocus}>Focus</button>
       {text}---
      {count.current} --- {prevName.current}
    </div>
  )
}

export default App


