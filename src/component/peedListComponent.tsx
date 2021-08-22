import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigator } from "karrotframe/lib";


export const PeedListComponent = () => {
    const { push } = useNavigator();

    const onClick = () => {
        push('/detail')
    }

    return (
        <div className="bg-white mb-2">
            <Link to={{pathname: 'detail'}}>
                <div className="p-4">
                    <div className="inline-flex bg-background p-1">
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
            </Link>
            <hr/>
            <div className="py-3 px-4">
                <button className="mr-5">공감하기</button>
                <button onClick={onClick}>댓글쓰기</button>
            </div>
        </div>
    )
}