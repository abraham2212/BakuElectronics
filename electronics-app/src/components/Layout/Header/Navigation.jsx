import React from 'react'
import logo from '../../../assets/img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronDown, faPhoneVolume,faScaleUnbalancedFlip,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser,faHeart} from '@fortawesome/free-regular-svg-icons'
function Navigation() {
    return (
        <div>
            <div className="bottom-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="logo-area">
                                <img src={logo} alt="logo" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="header-center">
                                <form action="">
                                    <div className="input-area">
                                        <input type="text" placeholder='Axtarış' />
                                        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{ color: "#18191b", }} />
                                    </div>
                                </form>
                                <ul className='d-flex align-items-center justify-content-between'>
                                    <li><a href="">Kampaniyalar</a> </li>
                                    <li><a href="">Mağazalar</a> </li>
                                    <li><a href=""> Digər <FontAwesomeIcon icon={faChevronDown} size="2xs" style={{ color: "#535455", }} /></a></li>
                                </ul>
                                <div class="header-call">
                                    <a href="tel:143" class="header-call-number">143 <FontAwesomeIcon icon={faPhoneVolume} style={{ color: "#111212", }} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="header-right">
                                <ul>
                                    <li><a href=""><FontAwesomeIcon icon={faUser} size="xl" style={{ color: "#202122", }} /></a> </li>
                                    <li><a href=""><FontAwesomeIcon icon={faHeart} size="xl" style={{color: "#202122",}} /></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faScaleUnbalancedFlip} size="xl" style={{color: "#202122",}} /></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faCartShopping} size="xl" style={{color: "#202122",}} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Navigation