import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'


function App() {

  let age  =20;
  let myArray =[1,2,3]
  let myObj={
    name:'sg',
    designamtion:'junior developer'
  }

  return (
    <>
      
    <Card username='Saurabh' age={age} companyName='xyz'  myArray={myArray} myObj={myObj} /> 
    <Card username='SG'/>
    <Card age='22'/>

    </>
  )
}

export default App
