import React from 'react'

function Qualification({ imgURL, title }) {
    return (
        <div className='col-6 col-md-4 col-lg-2 text-center'>
            <img src={imgURL} alt="" style={{ width: "8rem" }} />
            <h6>{title}</h6>
        </div>
    )
}

export default Qualification
