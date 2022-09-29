import React from "react"
import { token, map } from "./type"

export const Map = ({ThisMap}: {ThisMap:map}) => {
    return(
        <div>
            <PlanLayer AllToken={ThisMap.Plan}/>
        </div>
    )
}

const PlanLayer = ({AllToken}: {AllToken:token[]}) => {

    const tokens = AllToken.map((tok: token, i:number) => 
            <img src={tok.Image}/>
    )

    return(
        <div>
            {tokens}
        </div>
    )
}

