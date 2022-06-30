import React from 'react'

function Container({ children }) {
  return (
    <div className='container-fluid p-0'>
      {children}
    </div>
  )
}

export default Container
