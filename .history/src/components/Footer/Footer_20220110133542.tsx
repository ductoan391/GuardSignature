import React from 'react';
import 
function Footer() {
    return (
        <div>
            <div className="grid wide footer">
                <div className="row footer__row">
                    <div className="col l-5 c-12">
                        <div className="row-title">
                            <span className="title-span">이용약관</span>
                            <span className="title-span">개인정보처리방침</span>
                            <span className="title-span">고객센터</span>
                        </div>

                        <div className="row-contact">
                            <span className="span-contact1">(주) 가드시그니처 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000</span>
                            <span className="span-contact2">이메일 : test0101@guardsignature.co.kr｜ FAX : 070-0000-0000 </span>
                            <span className="span-contact3"> 서울특별시 강남구 도산대로 8길 17 3층</span>

                            <p className="p-contact">
                                Copyright© GUARDSIGNATURE All rights reserved.
                            </p>
                        </div>
                    </div>

                    <div className="col l-1 l-o-6 c-12">
                        <div className="box-icon">
                            <i className='bx bxl-google'></i>
                            <i className='bx bxl-facebook-circle'></i>
                            <i className='bx bxl-blogger'></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer