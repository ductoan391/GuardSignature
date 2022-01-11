import React from 'react';
import './Contract.scss';
import 
function Contract() {
    return (
        <div>
            <div className="grid wide">
                <div className="contract">
                    <div className="contract__header">
                        <div className="row">
                            <div className="col l-12 m-12 c-12">
                                <div className="contract__title">간단하게 끝내는 계약과정</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col l-12 m-12 c-12">
                                <div className="contract__description">
                                    <span className="description__span">계약서 파일을 업로드하여 서명을 요청해 보세요.</span>
                                    <p className="description__p">
                                        상대방은 회원가입 없이 이메일, 카카오톡 링크를 통해 서명할 수 있습니다.
                                        언제 어디서든 5분만에 계약을 체결해 보세요.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row contract__bottom">
                        <div className="col l-3 m-3 c-12">
                            <div className="contract__bottom-item">
                                <img src="../../../../assets/img/contract.PNG" alt="" className="item-img" />
                                <div className="item-text">
                                    <div className="text-title">업로드하기</div>
                                    <div className="text-des">필요한 계약서 파일을
                                        업로드합니다.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col l-3 m-3 c-12">
                            <div className="contract__bottom-item">
                                <img src="../../../../assets/img/upload-icon-2.png" alt="" className="item-img" />
                                <div className="item-text">
                                    <div className="text-title">업로드하기</div>
                                    <div className="text-des">필요한 계약서 파일을
                                        업로드합니다.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col l-3 m-3 c-12">
                            <div className="contract__bottom-item">
                                <img src="../../../../assets/img/upload-icon-3.png" alt="" className="item-img" />
                                <div className="item-text">
                                    <div className="text-title">업로드하기</div>
                                    <div className="text-des">필요한 계약서 파일을
                                        업로드합니다.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col l-3 m-3 c-12">
                            <div className="contract__bottom-item item-img4">
                                <img src="../../../../assets/img/upload-icon-4.png" alt="" className="item-img" />
                                <div className="item-text">
                                    <div className="text-title">업로드하기</div>
                                    <div className="text-des">필요한 계약서 파일을
                                        업로드합니다.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contract
