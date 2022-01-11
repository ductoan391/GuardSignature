import React from 'react';
import './Item1.scss';
import item1 from '../../Assets/img/item1.png';
import item2 from '../../Assets/img/item2.png';
import item3 from '../../Assets/img/item3.png';
import item4 from '../../Assets/img/item4.png';


function Item1() {
    return (
        <div>
            <div className="item">
                <div className="grid wide item1">
                    <div className="row">
                        <div className="col l-6 m-6 c-12">
                            <img src={item1} className="item1__img" />
                        </div>
                        <div className="col l-6 m-6 c-12">
                            <div className="item1__text">
                                <div className="text-header">FIRST</div>
                                <div className="text-title">한 눈에 확인하는
                                    계약 상태</div>
                                <span className="text-des">계약이 진행되는 모든 과정을 실시간으로 추적해보세요.
                                    진행 상태에 따라 내 서명 필요, 서명 대기중, 서명 완료,
                                    취소, 거절 등이 조회됩니다. 상태 필터 기능을 통해 상태별로
                                    문서를 나열하고 관리할 수도 있습니다.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item2">
                    <div className="grid wide item2-wrap">
                        <div className="row">
                            <div className="col l-6 m-6 c-12">
                                <div className="item2__text">
                                    <div className="text-header">SECOND</div>
                                    <div className="text-title2">사용하던 서명
                                        그대로
                                    </div>
                                    <span className="text-des2">사용하던 사인과 도장을 PC와 모바일에서도 사용할 수 있습니다.
                                        사인을 직접 그리거나, 다양한 서체의 디지털 도장을 만들 수 있습니다.
                                        실제 도장을 카메라로 찍어서 업로드 하면 깔끔하게 보정되며,
                                        가드 시그니처에서 만든 사인과 도장을 계약서에 바로 사용할 수 있습니다</span>
                                </div>
                            </div>
                            <div className="col l-6 m-6 c-12">
                                <img src={item2} className="item1__img" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid wide item1">
                    <div className="row">
                        <div className="col l-6 m-6 c-12">
                            <img src="../../../../assets/img/item3.PNG" className="item1__img" />
                        </div>
                        <div className="col l-6 m-6 c-12">
                            <div className="item1__text">
                                <div className="text-header">THIRD</div>
                                <div className="text-title title3">간편한 본인인증</div>
                                <span className="text-des">공인인증서와 OTP, Active X 등을 요구하지 않습니다.
                                    간단하고 빠른 휴대폰 인증과 접근 암호 설정으로 본인인증을
                                    요청할 수 있습니다. 본인인증 요청은 법적효력과 상관없이
                                    선택적으로 이용 가능합니다.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item2">
                    <div className="grid wide item2-wrap">
                        <div className="row">
                            <div className="col l-6 m-6 c-12">
                                <div className="item2__text">
                                    <div className="text-header">FOURTH</div>
                                    <div className="text-title2">텍스트 및
                                        체크박스 입력
                                    </div>
                                    <span className="text-des2">문서에 텍스트 박스와 체크박스를 입력해 보세요.
                                        입력 위치, 크기, 글자체를 자유롭게 지정하고
                                        필수입력 여부를 설정할 수 있습니다.
                                        상대방에게 텍스트 입력을 요청할 수도 있습니다.</span>
                                </div>
                            </div>
                            <div className="col l-6 m-6 c-12">
                                <img src="../../../../assets/img/item4.PNG" className="item1__img" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Item1
