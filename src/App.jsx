import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   
  return (
    <>
    <body >
      <h1 className='head'>Campus Notification System</h1>
      <button className='priority_button'>Priority Inbox</button>
      <div>
       <div className='box'>
        <h2 className='x'>RESULT</h2>
         <h4>mid sem</h4>
         {/* <button onclick={count}>count:{count}</button> */}
       </div>
       <br></br>
        <div className='box'>
        <h2 className='x'>PLACEMENT</h2>
         <h4>Csx corporation hiring</h4>
       </div>
       </div>
    </body>

    </>
  )
}

export default App
