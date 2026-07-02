import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className="max-w-screen-xl mx-auto p-10 min-h-[400px]">
      <h1 className="text-4xl font-bold">Home Page</h1>
    </div>
    <div className='flex justify-center mx-10 my-10'>
      <img className="w-90  rounded-lg" src="https://images.pexels.com/photos/32485141/pexels-photo-32485141.jpeg" alt="img1" />
    </div>
    </>
  )
}

export default Home
