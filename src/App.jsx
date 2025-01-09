
import React from 'react';
import './App.css'
import Parent from './Component/Parent';
export let Propcontext=React.createContext();
export let Studcontext=React.createContext();


function App() {
 
let sname="Ankit"
  return (
    <>
    <Propcontext.Provider value={sname}>
      <Studcontext.Provider value={"Yadav"}>
      <Parent myname={sname}></Parent>
     
      </Studcontext.Provider>
      </Propcontext.Provider>
    

    </>
  )
}

export default App
