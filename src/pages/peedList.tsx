import { ScreenHelmet } from "karrotframe";
import React from "react";
import { PeedListComponent } from "../component/peedListComponent";


export const PeedList: React.FC = () => {
    return (
        <>
            <ScreenHelmet title="Peed List"/>
            <div className="bg-background">
                <PeedListComponent/>
                <h1>aksdjaksfnl;dsfaknasdfkn;dfs</h1>
            </div>
        </>
    )
}