import React, { ReactNode } from 'react'

const Rootlayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <h1>Root Layout</h1>
      {children}
    </div>
  )
}

export default Rootlayout
