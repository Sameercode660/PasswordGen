import React, { useCallback, useEffect, useState } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('')
  const [numberAllowed, setNumberAllowed] = useState('false')
  const [character, setCharacterAllowed] = useState('false')

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnop'
    if(numberAllowed) str += '123456789'
    if(character) str += '~!@#$%^&*()_+='

    for(let i = 1; i <= length; i++)
    {
      let char = str[Math.ceil(Math.random() * str.length)]
      pass += char
    }
    setPassword(pass)
  }, [setPassword, numberAllowed, character, length])

  useEffect(()=>{
    passwordGenerator()
  },
  [setPassword, character, setNumberAllowed, length])
  return (
    <div className="text-sky-50 bg-gray-600 my-10 w-96 h-36 text-center">
       password Generator
       <div>
        <input type="text"
          className='my-4 outline-none text-orange-400 text-lg'
          value={password}
        />
        <button
          className='bg-sky-600 h-8 w-10 rounded-r-lg'
        >Copy</button>


       </div>
       <div className="">
        <input type="range" name="range" id="" 
          min={8}
          max={100}
          onChange={(e)=>{
            setLength(e.target.value)
          }}
        />
        <label htmlFor="range">Range:{length}</label>
        <input type="checkbox" name="number" id="" 
        onChange={()=>{
          setNumberAllowed((prev)=> !prev)
        }}
        />
        <label htmlFor="number">Number</label>

        <input type="checkbox" name="character" id="" 
          onChange={()=>{
            setCharacterAllowed((prev)=> !prev)
          }}
        />
        <label htmlFor="character">Character</label>
       </div>
    </div>
  );
}

export default App;