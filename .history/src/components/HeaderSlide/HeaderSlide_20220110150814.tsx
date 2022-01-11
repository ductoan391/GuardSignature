import React from 'react'

function HeaderSlide() {
    return (
        <div>
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide">
                            <img src="../../../../assets/img/banner1.jpg" alt="">

                                <div className="slide-box">
                                    <div className="slide__title">
                                        <p className="slide__title-p">모든 계약을 쉽고</p>
                                        <div className="slide__title-span">간단하게, 빠르게 처리하세요.</div>
                                    </div>

                                    <div className="slide__description">
                                        <span className="description__span">
                                            가드 시그니처를 이용하면 어떤 계약이든
                                        </span>
                                        <div className="description__p1">
                                            복잡한 과정없이 간편하고 손쉽게 처리할 수 있고,
                                        </div>
                                        <div className="description__p2">
                                            문서 처리 및 관리까지 편리하게 이용할 수 있습니다.
                                        </div>
                                    </div>

                                    <div className="slide__bottom">
                                        <span className="slide__bottom-title">지금 확인하기</span>
                                        <div className="slide__bottom-btn">
                                            <a href="#" className="btn__link">
                                                <i className="arrow"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                        </li>
                        <li className="glide__slide">
                            <img src="../../../../assets/img/banner1.jpg" alt="" />
                        </li>
                        <li className="glide__slide">
                            <img src="../../../../assets/img/banner1.jpg" alt="" />
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default HeaderSlide
