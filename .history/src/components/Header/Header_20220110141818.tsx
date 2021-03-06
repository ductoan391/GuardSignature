import React from 'react'

function Header() {
    return (
        <div>
            <div class="header">
  <div class="header__logo">
    <span class="logo__span">Guard</span>
    <p class="logo__p">Signature</p>
  </div>

  <ul class="header__menu">
    <li class="header__menu-item">
      <a href="#" class="item__link">서비스 소개</a>
    </li>
    <li class="header__menu-item">
      <a href="#" class="item__link">법적효력·보안</a>
    </li>
    <li class="header__menu-item">
      <a href="#" class="item__link">활용 분야</a>
    </li>
    <li class="header__menu-item">
      <a href="#" class="item__link">이용 혜택</a>
    </li>
    <li class="header__menu-item">
      <a href="#" class="item__link">요금 안내</a>
    </li>
    <li class="header__menu-item">
      <a href="#" class="item__link">고객센터</a>
    </li>
  </ul>

  <div class="header__user">
    <a href="" class="header__user-login">로그인</a>
    <a href="" class="header__user-register">회원가입</a>
  </div>
</div>

<!-- header mobile -->
<input type="checkbox" hidden class="input__check" id="input__id">
<label for="input__id" class="overplay"></label>

<div class="header-mobile">
  <label for="input__id" class="burger">
    <div class="line1"></div>
    <div class="line3"></div>
    <div class="line2"></div>
  </label>

  <div class="header__logo">
    <span class="logo__span">Guard</span>
    <p class="logo__p">Signature</p>
  </div>
</div>

<ul class="header__menu-mobile">
  <label for="input__id" class="mobile-close"><i class="mobile-close-icon fas fa-times"></i></label>
  <li class="header__menu-item-mobile">
    <a href="#" class="item__link">
      <i class="item__link-icon fab fa-servicestack"></i>
      서비스 소개
    </a>
  </li>
  <li class="header__menu-item-mobile">
    <a href="#" class="item__link">
      <i class="item__link-icon fas fa-user-shield"></i>
      법적효력·보안
    </a>
  </li>
  <li class="header__menu-item-mobile">
    <a href="#" class="item__link">
      <i class="item__link-icon fas fa-rocket"></i>
      활용 분야
    </a>
  </li>
  <li class="header__menu-item-mobile">
    <a href="#" class="item__link">
      <i class="item__link-icon fas fa-coins"></i>
      이용 혜택
    </a>
  </li>
  <li class="header__menu-item-mobile">
    <a href="#" class="item__link">
      <i class='item__link-icon bx bxs-info-circle'></i>
      요금 안내</a>
  </li>
  <li class="header__menu-item-mobile">
    <a href="#" class="item__link">
      <i class="item__link-icon fab fa-centercode"></i>
      고객센터</a>
  </li>
  <li class="header__menu-item-mobile">
    <a href="#" class="item__link">
      <i class='item__link-icon big-size bx bxs-log-in'></i>
      로그인</a>
  </li>
  <li class="header__menu-item-mobile">
    <a href="#" class="item__link">
      <i class='item__link-icon big-size bx bx-registered'></i>
      회원가입</a>
  </li>
</ul>

        </div>
    )
}

export default Header
