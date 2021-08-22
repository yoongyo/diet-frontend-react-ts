import React from 'react';




export const Profile:React.FC = () => {
    return (
        <div className=" bg-background">
            <div className="bg-white px-3 mb-3">
                <div>
                    <div className="flex flex-row py-6">
                        <div>
                            <img/>
                        </div>
                        <div>
                            <p>산타모니카</p>
                            <p>반송동 #8130680</p>
                        </div>
                    </div>
                    <div className="border text-center rounded-sm">프로필 보기</div>
                </div>
                <div className="flex justify-between px-11 py-6">
                    <div>
                        <p>판매내역</p>
                    </div>
                    <div>
                        <p>구매내역</p>
                    </div>
                    <div>
                        <p>관심목록</p>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div>fuck</div>
            </div>
        </div>
    )
}