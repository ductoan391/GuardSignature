import React from 'react'

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
                            <div className="protect__row-item" onclick="document.getElementById('img__id').src='../../../../assets/img/item2.PNG'">
                                <i className='bx bx-book-open item-icon'></i>
                                <div className="item-title">쉽고 편리하게</div>
                                <div className="item-des">번거로운 절차 없이 누구나 빠르게 계약을 체결할 수 있습니다.</div>
                            </div>
                            <div className="protect__row-item" onclick="document.getElementById('img__id').src='../../../../assets/img/item4.PNG'">
                                <i className='bx bx-key item-icon'></i>
                                <div className="item-title">안전한 보안</div>
                                <div className="item-des">데이터는 암호화되어 전송되고
                                    안전한 곳에 저장됩니다.</div>
                            </div>
                            <div className="protect__row-item" onclick="document.getElementById('img__id').src='../../../../assets/img/item3.PNG'">
                                <i className='bx bx-info-circle item-icon'></i>
                                <div className="item-title">다양한 파일형식</div>
                                <div className="item-des">한글, 오피스부터 PDF, JPG와
                                    같은 이미지 파일도 변환없이 지원</div>
                            </div>

                        </div>
                        <div className="col l-6 m-6 c-12 protect__img" >
                            <img src="../../../../assets/img/last.PNG" alt="" className="protect-img" id="img__id">
                        </div>
                        <div className="col l-3 c-6">
                            <div className="protect__row-item2" onclick="document.getElementById('img__id').src='../../../../assets/img/last.PNG'">
                                <i className='bx bx-book-open item-icon'></i>
                                <div className="item-title">쉽고 편리하게</div>
                                <div className="item-des">번거로운 절차 없이 누구나
                                    빠르게 계약을 체결할 수 있습니다.</div>
                            </div>
                            <div className="protect__row-item2" onclick="document.getElementById('img__id').src='../../../../assets/img/item2.PNG'">
                                <i className='bx bx-key item-icon'></i>
                                <div className="item-title">안전한 보안</div>
                                <div className="item-des">데이터는 암호화되어 전송되고
                                    안전한 곳에 저장됩니다.</div>
                            </div>
                            <div className="protect__row-item2" onclick="document.getElementById('img__id').src='../../../../assets/img/item1.PNG'">
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


            <!-- MObile -->
            <div className="protect2">
                <div className="grid wide">
                    <div className="protect__header">
                        <div className="protect-title">가드 시그니처를 선택하는 이유</div>
                        <div className="protect-des">많은 기업들이 가드 시그니처를 선택하는 이유,
                            아래 버튼을 눌러 상세한 정보를 알아보세요.</div>
                    </div>
                    <div className="row protect__row">
                        <div className="col c-12 protect__img">
                            <img src="../../../../assets/img/last.PNG" alt="" className="protect-img" id="img__id2">
                        </div>


                        <div className="col c-6">
                            <div className="protect__row-item right" onclick="document.getElementById('img__id2').src='../../../../assets/img/item2.PNG'">
                                <i className='bx bx-book-open item-icon'></i>
                                <div className="item-title">쉽고 편리하게</div>
                                <span className="item-des">번거로운 절차 없이 누구나 빠르게 계약을 체결할 수 있습니다.</span>
                            </div>
                        </div>

                        <div className="col c-6">
                            <div className="protect__row-item2" onclick="document.getElementById('img__id2').src='../../../../assets/img/item1.PNG'">
                                <i className='bx bx-key item-icon'></i>
                                <div className="item-title">안전한 보안</div>
                                <span className="item-des">데이터는 암호화되어 전송되고
                                    안전한 곳에 저장됩니다.</span>
                            </div>
                        </div>

                        <div className="col c-6">
                            {/*  */}
                            <div className="protect__row-item right" >
                                <i className='bx bx-info-circle item-icon'></i>
                                <div className="item-title">다양한 파일형식</div>
                                <span className="item-des">한글, 오피스부터 PDF, JPG와
                                    같은 이미지 파일도 변환없이 지원</span>
                            </div>
                        </div>


                        <div className="col c-6">
                            {/* onclick="document.getElementById('img__id2').src='../../../../assets/img/item2.PNG'" */}
                            <div className="protect__row-item2" >
                                <i className='bx bx-user-circle item-icon'></i>
                                <div className="item-title">간단한 본인인증</div>
                                <span className="item-des">공인인증서와 ActiveX없이도
                                    본인인증을 할 수 있습니다.</span>
                            </div>
                        </div>


                        <div className="col c-6">
                            {/* onclick="document.getElementById('img__id2').src='../../../../assets/img/item3.PNG'" */}
                            <div className="protect__row-item2 right"  >
                                <i className='bx bx-folder-open item-icon'></i>
                                <div className="item-title">효율적인 작업</div>
                                <span className="item-des">자주 사용하는 문서들을 저장하고
                                    불러와 작업할 수 있습니다.</span>
                            </div>
                        </div>

                        <div className="col c-6">
                            {/* onclick="document.getElementById('img__id2').src='../../../../assets/img/last.PNG'" */}
                            <div className="protect__row-item2"  >
                                <i className='bx bx-book-content item-icon'></i>
                                <div className="item-title">계약서 관리</div>
                                <span className="item-des">관리가 필요한 문서를 한 눈에 보고
                                    체계적으로 관리할 수 있습니다.</span>
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
