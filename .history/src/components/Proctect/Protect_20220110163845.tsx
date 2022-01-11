import React from 'react';
import './Protect.scss';
import last from '../../Assets/img/last.png'

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
                                <i className='bx bx-book-open item-icon'></i>
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
                            <svg id="_-e-reason_icon_1" data-name="-e-reason_icon_1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
  <defs>
    <style>
      .cls-1, .cls-2 {
        fill: #333;
      }
      .cls-1 {
        fill-opacity: 0;
        opacity: 0.2;
      }
      .cls-2 {
        fill-rule: evenodd;
      }
    </style>
  </defs>
  <rect id="icon_holder" class="cls-1" width="30" height="30"/>
  <path class="cls-2" d="M1354.75,7254.71a10.286,10.286,0,0,0-1.3-.59v-2.08a0.529,0.529,0,0,0-.36-0.5,16.1,16.1,0,0,0-4.47-.54,11.66,11.66,0,0,0-8.62,3.42,11.66,11.66,0,0,0-8.62-3.42c-2.74,0-3.37.52-3.43,0.54a0.516,0.516,0,0,0-.36.5v2.08a17.215,17.215,0,0,1-2.34.59,0.552,0.552,0,0,0-.25.45v19.76a0.51,0.51,0,0,0,.23.43,0.486,0.486,0,0,0,.48.05,20.934,20.934,0,0,1,7.05-1,14.6,14.6,0,0,1,6.97,1.49,0.88,0.88,0,0,0,.15.05l-1.63-2.65a11.758,11.758,0,0,0-6.87-2.01,8.277,8.277,0,0,0-2.76.37v-19.21a7.31,7.31,0,0,1,2.76-.4,10.657,10.657,0,0,1,8.1,3.34v10.89a2.324,2.324,0,0,1,.74.47l0.26,0.24v-5.04a2.909,2.909,0,0,1,.04-0.31v-6.25a10.672,10.672,0,0,1,8.1-3.34,16.832,16.832,0,0,1,3.79.4v19.34a5.619,5.619,0,0,1-.08.92,2.881,2.881,0,0,1,.44.12,0.523,0.523,0,0,0,.68-0.5v-17.08c0.21,0.09.39,0.17,0.52,0.23v18.73a19.07,19.07,0,0,0-1.91-.44c-0.05.13-.09,0.25-0.14,0.37l-0.28.62a15.661,15.661,0,0,1,2.65.65,0.486,0.486,0,0,0,.48-0.05,0.536,0.536,0,0,0,.23-0.43v-19.76A0.552,0.552,0,0,0,1354.75,7254.71Zm-23.37,17.61a10.877,10.877,0,0,1,5.91,1.57,18.948,18.948,0,0,0-4.53-.53,24.331,24.331,0,0,0-6.73.84v-18.52c0.13-.06,1.34-0.35,1.56-0.44v17.08a0.526,0.526,0,0,0,.21.42,0.509,0.509,0,0,0,.46.08C1328.28,7272.81,1328.81,7272.32,1331.38,7272.32Zm17.8,4.68h-7.14a0.5,0.5,0,0,1-.44-0.25l-4.41-7.15a1.6,1.6,0,0,1,.14-2.03,1.559,1.559,0,0,1,2.19-.07l2,1.84v-7.4a1.575,1.575,0,0,1,.52-1.17,1.533,1.533,0,0,1,1.21-.4,1.611,1.611,0,0,1,1.4,1.63v4.2a1.945,1.945,0,0,1,1.39.09c0.59,0.28,2.7,1.35,4.37,2.19a1.788,1.788,0,0,1,.97,1.6v1.7a4.744,4.744,0,0,1-.41,1.93l-1.32,2.98A0.512,0.512,0,0,1,1349.18,7277Zm-6.86-1.04h6.53l1.18-2.67a3.756,3.756,0,0,0,.32-1.51v-1.7a0.749,0.749,0,0,0-.41-0.67c-1.66-.84-3.77-1.9-4.34-2.18a1.183,1.183,0,0,0-1.13.22,0.523,0.523,0,0,1-.55.06,0.531,0.531,0,0,1-.3-0.47V7262a0.589,0.589,0,0,0-.48-0.6,0.557,0.557,0,0,0-.41.14,0.537,0.537,0,0,0-.18.4v8.58a0.512,0.512,0,0,1-.86.38l-2.86-2.63a0.539,0.539,0,0,0-.76.03,0.558,0.558,0,0,0-.02.72Z" transform="translate(-1325 -7249)"/>
</svg>
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
