import React from 'react'

function HeaderSlide() {
    return (
        <div>
            <div class="glide">
  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides">
      <li class="glide__slide">
        <img src="../../../../assets/img/banner1.jpg" alt="">

        <div class="slide-box">
          <div class="slide__title">
            <p class="slide__title-p">모든 계약을 쉽고</p>
            <div class="slide__title-span">간단하게, 빠르게 처리하세요.</div>
          </div>

          <div class="slide__description">
            <span class="description__span">
              가드 시그니처를 이용하면 어떤 계약이든
            </span>
            <div class="description__p1">
              복잡한 과정없이 간편하고 손쉽게 처리할 수 있고,
            </div>
            <div class="description__p2">
              문서 처리 및 관리까지 편리하게 이용할 수 있습니다.
            </div>
          </div>

          <div class="slide__bottom">
            <span class="slide__bottom-title">지금 확인하기</span>
            <div href="#" class="slide__bottom-btn">
              <a href="#" class="btn__link">
                <i class="arrow"></i>
              </a>
            </div>
          </div>
        </div>

      </li>
      <li class="glide__slide">
        <img src="../../../../assets/img/banner1.jpg" alt="">
      </li>
      <li class="glide__slide">
        <img src="../../../../assets/img/banner1.jpg" alt="">
      </li>
    </ul>
  </div>
</div>

        </div>
    )
}

export default HeaderSlide
