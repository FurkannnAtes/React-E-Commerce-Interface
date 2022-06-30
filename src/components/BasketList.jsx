import React from 'react'
import "./BasketList.css"


function BasketList({ total, basket, resetBasket }) {


    return (
        <div className='col-lg-10  mx-auto' >
            {total === 0 && (<div className='text-center  d-flex justify-content-center align-items-center' style={{ height: "80vh" }}><h1 >Basket Empty :(</h1> </div>)}
            <table className="table ">

                <thead>
                    {total > 0 && (<tr >
                        <th scope='2' >No</th>
                        <th scope='2'>Image</th>
                        <th scope='2' >Name</th>
                        <th scope='2'>Price</th>

                    </tr>)}

                </thead>
                <tbody>
                    {basket.map((basketItem) =>
                        <tr className=''>
                            <th className='no  col-1' >{basketItem.id}</th>
                            <td className='img col-2'><img src={basketItem.imgURL} alt="" style={{ maxHeight: "100px", maxWidth: "100px" }} /></td>
                            <td className='title col-4'>{basketItem.title}</td>
                            <td className='price col-2' >$ {basketItem.price}</td>

                        </tr>

                    )}


                </tbody>
            </table>
            <table className='table'>
                <tbody>
                    {total > 0 && (<tr>
                        <td className='total '>Total:<span className='text-success'>$</span>{total}</td>
                        <td></td>
                        <td></td>

                        <td className='col-2 col-lg-3' ><button className='btn btn-danger text-nowrap ms-lg-4 ' onClick={resetBasket}   >Reset Basket</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default BasketList
