import React from 'react'

function Header() {
    return (
        <div>
            <div className="header">
                <div className="header__logo">
                    <span className="logo__span">Guard</span>
                    <p className="logo__p">Signature</p>
                </div>

                <ul className="header__menu">
                    <li className="header__menu-item">
                        <a href="#" className="item__link">서비스 소개</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="#" className="item__link">법적효력·보안</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="#" className="item__link">활용 분야</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="#" className="item__link">이용 혜택</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="#" className="item__link">요금 안내</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="#" className="item__link">고객센터</a>
                    </li>
                </ul>

                <div className="header__user">
                    <a href="" className="header__user-login">로그인</a>
                    <a href="" className="header__user-register">회원가입</a>
                </div>
            </div>


            <label for="input__id" className="overplay"></label>

            <div className="header-mobile">
                <label for="input__id" className="burger">
                    <div className="line1"></div>
                    <div className="line3"></div>
                    <div className="line2"></div>
                </label>

                <div className="header__logo">
                    <span className="logo__span">Guard</span>
                    <p className="logo__p">Signature</p>
                </div>
            </div>

            <ul className="header__menu-mobile">
                <label for="input__id" className="mobile-close"><i className="mobile-close-icon fas fa-times"></i></label>
                <li className="header__menu-item-mobile">
                    <a href="#" className="item__link">
                        <i className="item__link-icon fab fa-servicestack"></i>
                        서비스 소개
                    </a>
                </li>
                <li className="header__menu-item-mobile">
                    <a href="#" className="item__link">
                        <i className="item__link-icon fas fa-user-shield"></i>
                        법적효력·보안
                    </a>
                </li>
                <li className="header__menu-item-mobile">
                    <a href="#" className="item__link">
                        <i className="item__link-icon fas fa-rocket"></i>
                        활용 분야
                    </a>
                </li>
                <li className="header__menu-item-mobile">
                    <a href="#" className="item__link">
                        <i className="item__link-icon fas fa-coins"></i>
                        이용 혜택
                    </a>
                </li>
                <li className="header__menu-item-mobile">
                    <a href="#" className="item__link">
                        <i className='item__link-icon bx bxs-info-circle'></i>
                        요금 안내</a>
                </li>
                <li className="header__menu-item-mobile">
                    <a href="#" className="item__link">
                        <i className="item__link-icon fab fa-centercode"></i>
                        고객센터</a>
                </li>
                <li className="header__menu-item-mobile">
                    <a href="#" className="item__link">
                        <i className='item__link-icon big-size bx bxs-log-in'></i>
                        로그인</a>
                </li>
                <li className="header__menu-item-mobile">
                    <a href="#" className="item__link">
                        <i className='item__link-icon big-size bx bx-registered'></i>
                        회원가입</a>
                </li>
            </ul>

        </div>
    )
}

export default Header
