import React from 'react';
import './Now.scss';

function Now() {
    return (
        <div>
            <div className="now">
                <div className="grid wide">
                    <div className="row now__wrap">
                        <div className="col l-6 l-o-3 m-6 m-0-3 c-12">
                            <div className="now__wrap-text">
                                <div className="now__title"> 지금 바로 시작하세요!</div>
                                <div className="now__des">설명이 필요 없는 간단한 계약 과정,
                                    직접 경험해보세요!</div>
                                <button className="now__btn">
                                    <div className="now-btn-wrap">
                                        <div className="btn-span">더 살펴보기</div>
                                        <div className="btn-div">
                                            <i className="arrow"></i>
                                        </div>
                                        
                                    </div>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Now
