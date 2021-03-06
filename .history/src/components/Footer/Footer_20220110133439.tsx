import React from 'react'

function Footer() {
    return (
        <div>
            <div class="grid wide footer">
                <div class="row footer__row">
                    <div class="col l-5 c-12">
                        <div class="row-title">
                            <span class="title-span">이용약관</span>
                            <span class="title-span">개인정보처리방침</span>
                            <span class="title-span">고객센터</span>
                        </div>

                        <div class="row-contact">
                            <span class="span-contact1">(주) 가드시그니처 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000</span>
                            <span class="span-contact2">이메일 : test0101@guardsignature.co.kr｜ FAX : 070-0000-0000 </span>
                            <span class="span-contact3"> 서울특별시 강남구 도산대로 8길 17 3층</span>

                            <p class="p-contact">
                                Copyright© GUARDSIGNATURE All rights reserved.
                            </p>
                        </div>
                    </div>

                    <div class="col l-1 l-o-6 c-12">
                        <div class="box-icon">
                            <i class='bx bxl-google'></i>
                            <i class='bx bxl-facebook-circle'></i>
                            <i class='bx bxl-blogger'></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
