import React from 'react'
import Form from './Form'
import DeleteUsers from "./DeleteUsers"

const WhatIKnow = () => {
  return (
    <>
        <h1 className='text-lime-400 font-bold text-4xl text-center m-14'>What I know?</h1>
      <Form/>
      <DeleteUsers/>
    </>
  )
}

export default WhatIKnow
