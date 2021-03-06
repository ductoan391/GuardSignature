import React from 'react'

function Now() {
    return (
        <div>
            <div class="now">
                <div class="grid wide">
                    <div class="row now__wrap">
                        <div class="col l-6 l-o-3 m-6 m-0-3 c-12">
                            <div class="now__wrap-text">
                                <div class="now__title"> 지금 바로 시작하세요!</div>
                                <div class="now__des">설명이 필요 없는 간단한 계약 과정,
                                    직접 경험해보세요!</div>
                                <button class="now__btn">
                                    <div class="now-btn-wrap">
                                        <span class="btn-span">더 살펴보기</span>
                                        <div class="btn-div">
                                            <i class="arrow"></i>
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
