import React, { useEffect, useState } from 'react'

function Github() {

  const [data, setData] = useState([])

  useEffect(()=>{
    fetch('https://api.github.com/users/Saurabh-0604')
    .then(res => res.json())
    .then(data =>{
      setData(data)
    })
  },[])
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-5 text-4px'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Github profile pic" width={300}/>
    </div>
  )
}

export default Github
