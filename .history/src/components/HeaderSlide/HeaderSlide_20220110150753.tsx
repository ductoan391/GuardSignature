import React from 'react'

function HeaderSlide() {
    return (
        <div>
            <div classNameNam="glide">
                <div classNameNam="glide__track" data-glide-el="track">
                    <ul classNameNam="glide__slides">
                        <li classNameNam="glide__slide">
                            <img src="../../../../assets/img/banner1.jpg" alt="">

                                <div classNameNam="slide-box">
                                    <div classNameNam="slide__title">
                                        <p classNameNam="slide__title-p">모든 계약을 쉽고</p>
                                        <div classNameNam="slide__title-span">간단하게, 빠르게 처리하세요.</div>
                                    </div>

                                    <div classNameNam="slide__description">
                                        <span classNameNam="description__span">
                                            가드 시그니처를 이용하면 어떤 계약이든
                                        </span>
                                        <div classNameNam="description__p1">
                                            복잡한 과정없이 간편하고 손쉽게 처리할 수 있고,
                                        </div>
                                        <div classNameNam="description__p2">
                                            문서 처리 및 관리까지 편리하게 이용할 수 있습니다.
                                        </div>
                                    </div>

                                    <div classNameNam="slide__bottom">
                                        <span classNameNam="slide__bottom-title">지금 확인하기</span>
                                        <div href="#" classNameNam="slide__bottom-btn">
                                            <a href="#" classNameNam="btn__link">
                                                <i classNameNam="arrow"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                        </li>
                        <li classNameNam="glide__slide">
                            <img src="../../../../assets/img/banner1.jpg" alt="">
                        </li>
                        <li classNameNam="glide__slide">
                            <img src="../../../../assets/img/banner1.jpg" alt="">
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default HeaderSlide
