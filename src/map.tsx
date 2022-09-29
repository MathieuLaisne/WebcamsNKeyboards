import React from "react"
import { token, map } from "./type"

export const Map = (ThisMap: map) => {
    return(
        <div>
            <PlanLayer AllToken={ThisMap.Plan}/>
        </div>
    )
}

const PlanLayer = (AllToken: token[]) => {
    { return AllToken.map((tok: token, i:number) => {
            return (
                <img src={tok.Image}/>
            );
    })}
}

