import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,


} from "react-router-dom";
//COMPONENTS IMPORT

import BasketList from "./components/BasketList";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import OfenosWord from "./components/OfenosWord";
import ProductList from "./components/ProductList";
import Qualification from "./components/Qualification";
import Register from "./components/Register";
import SearchBar from "./components/SearchBar"
import Slider from "./components/Slider";




function App() {

  const [productList, setProductList] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);




  const resetBasket = () => {
    setBasket([])
  }



  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(res => setProductList(res))



  }, [])




  //SEARCH BAR JS
  const searchProduct = (event) => {
    setSearchQuery(event.target.value)
  }

  let filtredProducts = productList.filter(
    (product) => {
      return product.title.toLowerCase().indexOf(searchQuery.toString().toLowerCase()) !== -1
    }
  )


  //Basket


  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (productList.find(product => product.id === item.id).price))
    }, 0))


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basket])


  return (

    <BrowserRouter>
      <Routes>


        <Route path="/*" element={

          <Header

            basket={basket}

          />} >


          <Route path="" element={

            <Container>
              <Slider />
              <OfenosWord >

                <Qualification
                  imgURL="https://mcdn01.gittigidiyor.net/ps/ggdunyasiillustrasyonlar_1641471027.png?type=ggworld&index=1"
                  title="Fast and reliable shopping"
                />
                <Qualification
                  imgURL="https://mcdn01.gittigidiyor.net/ps/ggdunyasiillustrasyonlar_1641471189.png?type=ggworld&index=2"
                  title="Zero Risk"
                />
                <Qualification
                  imgURL="https://mcdn01.gittigidiyor.net/ps/ggdunyasiillustrasyonlar_1641471361.png?type=ggworld&index=3"
                  title="winners club"
                />
                <Qualification
                  imgURL="https://mcdn01.gittigidiyor.net/ps/ggdunyasiillustrasyonlar_1641471969.png?type=ggworld&index=4"
                  title="Shopping from abroad"
                />
                <Qualification
                  imgURL="https://mcdn01.gittigidiyor.net/ps/ggdunyasiillustrasyonlar_1641472247.png?type=ggworld&index=5"
                  title="Ofenos Express"
                />

                <Qualification
                  imgURL="https://mcdn01.gittigidiyor.net/ps/ggdunyasiillustrasyonlar_1641472373.png?type=ggworld&index=6"
                  title="Easy return"
                />


              </OfenosWord>


              <Footer />


            </Container>
          } />
          <Route path="ProductList" element={
            <Container>
              <SearchBar searchProductProp={searchProduct} />
              <ProductList
                productList={filtredProducts}
                basket={basket}
                setBasket={setBasket}


              />

            </Container>
          }>

          </Route>

          <Route path="LoginUser" element={
            <Login />
          }>


          </Route>
          <Route path="RegisterUser" element={
            <Register />
          }>

          </Route>
          <Route path="BasketList" element={<BasketList


            total={total}
            basket={basket}
            resetBasket={resetBasket}




          />} />


        </Route >
      </Routes>
    </BrowserRouter>
  );
}

export default App;
