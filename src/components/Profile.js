import React, { useState } from 'react'

const Profile = () => {
    var [name,setName]=useState("eva")
    const changeName = () => {
        setName(
            name="evachu"
        )


    }
  return (
    <div>
        logged in as {name}
        <button onClick={changeName} className='btn btn-success'>Login</button>

    </div>
  )
}

export default Profile
