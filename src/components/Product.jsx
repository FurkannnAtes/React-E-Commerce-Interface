import React from 'react'
import "./Product.css"

function Product({ product, setBasket, basket }) {




  const addBasket = () => {

    const checkBasket = basket.find(item => item.id === product.id)
    //Before product added
    if (checkBasket) {
      checkBasket.amount += 1
      setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
    } else {
      setBasket([...basket, {
        amount: 1,
        title: product.title,
        imgURL: product.image,
        price: product.price,
        id: product.id
      }])
    }



  }




  return (

    <div className="card  mx-auto " style={{ width: "18rem" }} >
      <div className="card-header ">
        <img src={product.image} className="card-img-top my-2 mx-auto  " alt="..." style={{ height: "16rem", width: "16rem" }} />

      </div>


      <div className="card-body">
        <h5 className="card-title text-truncate">{product.title}</h5>
        <p className="card-text c-content "
        >
          {product.description}</p>
        <p className="card-text fs-5 ">
          {product.price} <span style={{ color: "rgb(10, 110, 0)" }}>$</span>
        </p>
        <button className='btn btn-secondary' onClick={addBasket} >Add Basket</button>



      </div>
    </div>

  )
}

export default Product






