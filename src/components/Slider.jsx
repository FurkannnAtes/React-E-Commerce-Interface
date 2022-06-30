import React from 'react'

function Slider() {
    return (
        <div id="sliderContainer" className="carousel carousel-dark slide col-lg-10 mx-auto mt-5" data-bs-ride="carousel">

            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    <img src="https://seogroupbuy.io/wp-content/uploads/2021/07/group-buy-seo-tools-coupon.jpg" className="d-block w-100" alt="..." />

                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="https://seogroupbuy.io/wp-content/uploads/2021/07/group-buy-seo-tools-coupon.jpg" className="d-block w-100" alt="..." />

                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="https://seogroupbuy.io/wp-content/uploads/2021/07/group-buy-seo-tools-coupon.jpg" className="d-block w-100" alt="..." />

                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#sliderContainer" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#sliderContainer" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider
