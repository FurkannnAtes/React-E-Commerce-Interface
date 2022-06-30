import React from 'react'

function OfenosWord({ children }) {
    return (
        <div className='col-lg-10 mt-5 row mx-auto bg-light pb-5'>
            <h1 className='p-lg-5 pt-3'>Ofenos Word</h1>
            {children}
        </div>
    )
}

export default OfenosWord
