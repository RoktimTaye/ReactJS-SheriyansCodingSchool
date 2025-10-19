import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex lg:w-1/2 flex-col gap-4 items-start p-10'>
        <input className='font-medium outline-none w-full px-5 py-2 border-2 rounded-2xl' type="text" placeholder='Enter Note Heading' />
        <textarea className='font-medium w-full px-5 py-2 h-20 border-2 rounded-2xl' placeholder='Enter Details' name="" id=""></textarea>
        <button className='font-medium w-full bg-white rounded-2xl text-black px-5 py-3'>Add Notes</button>
      </form>

      <div className='p-10 lg:w-1/2'>
        <h1 className='text-xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-10 mt-5 h-full overflow-auto'>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
        </div>
      </div>
    </div>
  )
}

export default App