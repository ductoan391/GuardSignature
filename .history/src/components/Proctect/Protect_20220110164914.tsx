import React from 'react';
import './Protect.scss';
import last from '../../Assets/img/last.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLi } from '@fortawesome/free-brands-svg-icons';



function Protect() {
    return (
        <div>
            <div className="protect">
                <div className="grid wide">
                    <div className="protect__header">
                        <div className="protect-title">가드 시그니처를 선택하는 이유</div>
                        <div className="protect-des">많은 기업들이 가드 시그니처를 선택하는 이유,
                            아래 버튼을 눌러 상세한 정보를 알아보세요.</div>
                    </div>
                    <div className="row protect__row">
                        <div className="col l-3 m-3 c-6">
                            {/* onclick="document.getElementById('img__id').src='../../../../assets/img/item2.PNG'" */}
                            <div className="protect__row-item" >
                                <FontAwesomeIcon icon={faCoffee} />
                                <div className="item-title">쉽고 편리하게</div>
                                <div className="item-des">번거로운 절차 없이 누구나 빠르게 계약을 체결할 수 있습니다.</div>
                            </div>
                            {/* onclick="document.getElementById('img__id').src='../../../../assets/img/item4.PNG'" */}
                            <div className="protect__row-item" >
                                <i className='bx bx-key item-icon'></i>
                                <div className="item-title">안전한 보안</div>
                                <div className="item-des">데이터는 암호화되어 전송되고
                                    안전한 곳에 저장됩니다.</div>
                            </div>
                            {/* onclick="document.getElementById('img__id').src='../../../../assets/img/item3.PNG'" */}
                            <div className="protect__row-item" >
                                <i className='bx bx-info-circle item-icon'></i>
                                <div className="item-title">다양한 파일형식</div>
                                <div className="item-des">한글, 오피스부터 PDF, JPG와
                                    같은 이미지 파일도 변환없이 지원</div>
                            </div>

                        </div>
                        <div className="col l-6 m-6 c-12 protect__img" >
                            <img src={last} alt="" className="protect-img" id="img__id" />
                        </div>
                        <div className="col l-3 c-6">
                            {/* onclick="document.getElementById('img__id').src='../../../../assets/img/last.PNG'" */}
                            <div className="protect__row-item2" >
                                <i className='bx bx-book-open item-icon'></i>
                                <div className="item-title">쉽고 편리하게</div>
                                <div className="item-des">번거로운 절차 없이 누구나
                                    빠르게 계약을 체결할 수 있습니다.</div>
                            </div>
                            {/* onclick="document.getElementById('img__id').src='../../../../assets/img/item2.PNG'" */}
                            <div className="protect__row-item2" >
                                <i className='bx bx-key item-icon'></i>
                                <div className="item-title">안전한 보안</div>
                                <div className="item-des">데이터는 암호화되어 전송되고
                                    안전한 곳에 저장됩니다.</div>
                            </div>
                            {/* onclick="document.getElementById('img__id').src='../../../../assets/img/item1.PNG'" */}
                            <div className="protect__row-item2" >
                                <i className='bx bx-info-circle item-icon'></i>
                                <div className="item-title">다양한 파일형식</div>
                                <div className="item-des">한글, 오피스부터 PDF, JPG와
                                    같은 이미지 파일도 변환없이 지원</div>
                            </div>
                        </div>
                    </div>
                    <button className="protect-btn">
                        <span className="btn-span">가이드 다운로드</span>
                        <i className="arrow right2"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Protect
