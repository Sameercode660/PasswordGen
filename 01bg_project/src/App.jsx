import './App.css'
import { useState } from 'react'

function App() {
  
  let [trackValue, setTrackValue] = useState('')

  function changeColor(e){
    document.body.style.backgroundColor = trackValue;
    if(trackValue.startsWith('rgb') || trackValue.startsWith('hsl') || trackValue.startsWith('#'))
    {
      return;
    }
    else
    {
      setTimeout(()=>{
        setTrackValue('')
      }, 1000)
    }
  }

  const colors = ['red', 'green', 'blue', 'white', 'cyan']
  return (
    <>
      {colors.map((color)=>{
        return <Template color={color} border={`1px solid ${color}`} />
      })}

      <input type="text" value={trackValue} onChange={(e)=>{
        setTrackValue(e.target.value)
      }}/>

      <button 
      onClick={changeColor}
      >Change</button>
    </>
  )
}



function Template({color, border}){

  function changeColor(e){
    e.stopPropagation()
    document.body.style.backgroundColor = color
  }
  return(
    <>
      <div className="container" style={{border : border}}>
        <p
        style={{cursor : 'pointer'}}
        onClick={changeColor}>{color}</p>
      </div>
    </>
  )
}
export default App
