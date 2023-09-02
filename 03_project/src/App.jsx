/*
Author : Mohd Sameer
Email : mohdsameer789736@gmail.com, mesh789736@gmail.com
Mobile : 6394867435
*/

import React, { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  // variable as a state to handle password, length of password and character or number allowance
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [character, setCharacterAllowed] = useState(false);
  const [copyText, setCopyText] = useState("Copy");
  // useRef hook variable for taking the reference
  let passwordRef = useRef(null);

  // function for generating the random number with useCallback hook that remember the function into the cache memory
  const passwordGenerator = useCallback(
    () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnop";

      // if evaluates true add number or character
      if (numberAllowed) str += "123456789";
      if (character) str += "~!@#$%^&*()_+=";

      // loop for generating the random password
      for (let i = 1; i <= length; i++) {
        let char = str[Math.floor(Math.random() * str.length)]; // taking the index randomy
        pass += char; // creating the random password string
      }

      setPassword(pass); // setting the password to the state variable password using setPassword method
    },
    [
      setPassword,
      numberAllowed,
      character,
      length,
    ] /*these are dependencies for useCallback hook*/
  );

  // function for copying the password on clipboard
  function copyPassword() {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);

    window.navigator.clipboard.writeText(password);
    setCopyText("Copied");
    setTimeout(() => {
      setCopyText("Copy");
    }, 2000);
  } //function ends

  // useEffect hook call the function passwordGenerator when app is mounted as well as when any action happens on dependencies
  useEffect(
    () => {
      passwordGenerator(); // password generator function Call
    },
    [
      setPassword,
      character,
      numberAllowed,
      length,
    ] /*Dependencies for useEffect hook to invoke the passwordGenerator function*/
  ); //function ends

  //jsx for UI
  return (
    // main container
    <div className="text-sky-50 bg-gray-600 my-10 w-96 h-36 text-center ">
      password Generator
      {/* password container starts from here */}
      <div>
        <input
          type="text"
          className={`password my-4 outline-none text-orange-400 text-lg rounded-l-md pl-1`}
          value={password}
          readOnly
          ref={passwordRef}
        />
        <button
          className="bg-blue-700 h-7 w-16 rounded-r-md text-sm cursor-pointer"
          onClick={copyPassword}
        >
          {copyText}
        </button>
      </div>
      {/*password container ends from here*/}
      {/*range input container stats from here*/}
      <div className="">
        {/*range input jsx*/}
        <input
          className="cursor-pointer"
          type="range"
          name="range"
          id=""
          min={8}
          max={100}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label htmlFor="range">Range:{length}</label>
        {/*range input jsx ends*/}

        {/*number checkbox input jsx*/}
        <input
          className="cursor-pointer"
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="number">Number</label>
        {/*number checkbox input jsx ends*/}

        {/*character checkbox input jsx*/}
        <input
          className="cursor-pointer"
          type="checkbox"
          defaultChecked={character}
          onChange={() => {
            setCharacterAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="character">Character</label>
        {/*character checkbox input jsx ends*/}
      </div>
      {/*range input container stats from here*/}
    </div>
  );
}

export default App;
