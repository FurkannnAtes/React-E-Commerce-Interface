
import "./Header.css"

import { Outlet, Link } from "react-router-dom"



function Header({ basket }) {


  const closeCanvas = () => {
    document.querySelector('[data-bs-toggle="collapse"]').click();
  };





  return (
    <div className="" style={{ zIndex: "999" }}>
      <nav className='navbar bg-secondary navbar-expand-lg navbar-dark px-lg-5' style={{ userSelect: "none" }}>

        <div className="navbar-brand ps-2 ps-lg-0"><Link to="/" onClick={closeCanvas} className='text-decoration-none text-white btn-close-canvas'>Ofenos</Link></div>
        <div className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className='navbar-toggler-icon'></span>
        </div>
        <div className="collapse navbar-collapse ps-2 ps-lg-0" id="navbarCollapse">
          <ul className='navbar-nav '>
            <Link to="/" onClick={closeCanvas} className='text-decoration-none btn-close-canvas'> <li className='nav-item'><span className='nav-link'>Home</span></li></Link>
            <Link to="ProductList" onClick={closeCanvas} className='text-decoration-none btn-close-canvas'> <li className='nav-item'><span className='nav-link'>Products</span></li></Link>

          </ul>
          <ul className='navbar-nav ms-auto  me-5'>
            <Link to="/RegisterUser" onClick={closeCanvas} className='text-decoration-none btn-close-canvas'>  <li className='nav-item '><span className='nav-link '><i className="bi bi-person "></i> Register</span></li></Link>
            <Link to="/LoginUser" onClick={closeCanvas} className='text-decoration-none btn-close-canvas'>  <li className='nav-item '><span className='nav-link '><i className="bi bi-box-arrow-in-right"></i> Login</span></li></Link>
            <Link to="/BasketList" onClick={closeCanvas} className='text-decoration-none btn-close-canvas'>  <li className='nav-item '><span className='nav-link '> <span className=' position-relative'> <i className="bi bi-cart">
              {Object.keys(basket).length > 0 && (<span className='position-absolute bg-danger rounded-circle  text-white  '>{(Object.keys(basket).length)}</span>)}</i></span></span></li></Link>
          </ul>
        </div>
      </nav >
      <Outlet />
    </div>

  )
}

export default Header
