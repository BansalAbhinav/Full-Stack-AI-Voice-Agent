import Agent from '@/components/Agent'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Interview Generation</h1>
      <Agent userName='You' userId="user1" type='generate'/>
    </div>
  )
}

export default page
