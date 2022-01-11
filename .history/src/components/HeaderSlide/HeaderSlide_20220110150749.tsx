import React from 'react'

function HeaderSlide() {
    return (
        <div>
            <div classNam="glide">
                <div classNam="glide__track" data-glide-el="track">
                    <ul classNam="glide__slides">
                        <li classNam="glide__slide">
                            <img src="../../../../assets/img/banner1.jpg" alt="">

                                <div classNam="slide-box">
                                    <div classNam="slide__title">
                                        <p classNam="slide__title-p">모든 계약을 쉽고</p>
                                        <div classNam="slide__title-span">간단하게, 빠르게 처리하세요.</div>
                                    </div>

                                    <div classNam="slide__description">
                                        <span classNam="description__span">
                                            가드 시그니처를 이용하면 어떤 계약이든
                                        </span>
                                        <div classNam="description__p1">
                                            복잡한 과정없이 간편하고 손쉽게 처리할 수 있고,
                                        </div>
                                        <div classNam="description__p2">
                                            문서 처리 및 관리까지 편리하게 이용할 수 있습니다.
                                        </div>
                                    </div>

                                    <div classNam="slide__bottom">
                                        <span classNam="slide__bottom-title">지금 확인하기</span>
                                        <div href="#" classNam="slide__bottom-btn">
                                            <a href="#" classNam="btn__link">
                                                <i classNam="arrow"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                        </li>
                        <li classNam="glide__slide">
                            <img src="../../../../assets/img/banner1.jpg" alt="">
                        </li>
                        <li classNam="glide__slide">
                            <img src="../../../../assets/img/banner1.jpg" alt="">
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default HeaderSlide
