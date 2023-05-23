import React from 'react'
import kondisioner  from "../../assets/img/products/1_330x220_d01.jpg";

function Products() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="product-card">
                        <div className="product-image">
                            <div class="product-price-discount-holder">
                                <div class="product-price-discount ">
                                    <div class="product-price-discount-wrap">
                                        <span class="product-price-discount-price">300 <i class="icon-manat"></i></span>
                                        <span class="product-price-discount-info">Nağd alışa ENDİRİM</span>
                                    </div>
                                </div>
                            </div>
                            <a href=""><img src={kondisioner} alt="" /></a>
                        </div>
                        <div className="product-desc">
                            <div className="product-rate">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <span>0 rey</span>
                            </div>
                            <a href=""></a>
                        </div>
                        <div className="product-value">
                            <span>Qiymət</span>
                            <div className="price">
                                <span>1899.99</span>
                                <span>₼</span>
                            </div>
                            <div class="product-credit">
                                Hissə-hissə ödəniş                    
                                <div class="product-credit-note">18 ay <span class="product-credit-price">106</span><span>₼</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products