import React from 'react'

//COMPONENTS IMPORT
import Product from './Product'

function ProductList({ productList, setBasket, basket }) {

  return (
    <div className="container pt-5 ">
      <div className=' row gy-5 gx-0'>
        {productList.map((product) => (
          <div className='col-md-6  col-lg-4 col-xxl-3' key={product.id.toString()}>
            <Product
              product={product}
              basket={basket}
              setBasket={setBasket}








            />
          </div>

        ))}
      </div>
    </div>
  )
}

export default ProductList
