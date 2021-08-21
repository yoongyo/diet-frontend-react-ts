import React from 'react';


export const PeedListComponent = () => {
    return (
        <div className="bg-white mb-5">
            <div className="p-4">
                <div className="flex-1 bg-background p-1">
                    <button><p>동네사건사고</p></button>
                </div>
                <div className="py-4" id="content">
                    <p>궁금한게 코로나 밤10시까지인데 마사지샵 운영해도되는가에요? 다 하던데</p>
                </div>
                <div className="flex justify-between py-2">
                    <p>오리오링리 * 수청동</p>
                    <p>15분전</p>
                </div>
            </div>
            <hr/>
            <div className="py-3">
                <button>공감하기</button>
                <button>댓글쓰기</button>
            </div>
        </div>
    )
}