import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {img:"https://plus.unsplash.com/premium_photo-1670884441849-779eb186fb9b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
    intro:"", 
    tag:"Satisfied"},
    {img:"https://plus.unsplash.com/premium_photo-1661638162972-00ee1c6822d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
    intro:"",
    tag:"Underserved"
    },
    {img:"https://plus.unsplash.com/premium_photo-1661765726902-7c813f5da654?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
    intro:"",
    tag:"Underbanked"}
  ]

  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App