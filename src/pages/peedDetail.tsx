import React from 'react';


export const PeedDetail = () => {
    return (
        <div>
            <div className="m-3">
                <div className="bg-background inline-flex p-1">
                    <p>우리동네질문</p>
                </div>
            
                <div className="flex flex-row py-3 border-b">
                    <div>

                    </div>
                    <div>
                        <p>젝슨 헝그리</p>
                        <p>능동 인증 3회 * 30분전</p>
                    </div>
                </div>
                <div className="py-5">
                    우리동네 점 잘보는 곳이 있나요?<br/>
                    한번도 본적 없네요<br/>
                    궁금한게 너무많아요 ㅜ<br/>
                    추천좀 해주세용<br/>
                </div>
                <div>
                    <p>부적절한 게시글이라면 당근마켓에 알려주세요.</p>
                </div>
            </div>


            <div className="border-t border-b p-2">
                <button className="mr-4">궁금해요</button>
                <button>답변하기</button>
            </div>
            <div>
                <div className="container mx-auto">
                    <h1>아직 댓글이 없어요.</h1>
                </div>
            </div>
        </div>
    )
}