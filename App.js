import React from "react"
function getWinner(blocks){
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i=0;i<lines.length;i++)
    {
        const[a,b,c]=lines[i];
        (blocks[a] && blocks[a] === blocks[b] && blocks[b] === blocks[c]?blocks[a] : "null")

    }
    return null
}

export default getWinner