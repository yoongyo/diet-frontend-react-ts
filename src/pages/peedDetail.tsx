import React from 'react';


export const PeedDetail:React.FC = () => {
    return (
        <div>
            <div className="m-3">
                {/* 질문태그 */}
                <div className="bg-background inline-flex p-1">
                    <p>우리동네질문</p>
                </div>

                {/* 질문자 프로필 */}
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
            {/* 댓글 */}
            <div>
                <div className="flex justify-center mt-11">
                    <div className="text-center">
                        <h1>아직 댓글이 없용.</h1>
                        <h1>가장 먼저 댓글을 달아보세요</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}