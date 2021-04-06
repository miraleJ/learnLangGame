import React, { useState } from 'react'
import imgData from '../data/imgData'
import hidingData from '../data/hidingItems'

export default function GamePage() {
    const [gameState, setGameState] = useState(false);

    return (
        <div>
            {/* random picture */}

            {/* sentence */}
            {/* points */}
        </div>
    )
}



    // const clickInItem = (x, y) => {
    //     return (
    //     (x >= imgData[0].tagsAndPlace[0].startC[0] && 
    //     x <= imgData[0].tagsAndPlace[0].endC[0] && 
    //     y >= imgData[0].tagsAndPlace[0].startC[1] && 
    //     y <= imgData[0].tagsAndPlace[0].endC[1]) ?
    //     true : false);
    // }

    // const handlePicClick = (event) => {
    //     console.log(event)
    //     const clickCoordinateX = event.nativeEvent.offsetX;
    //     const clickCoordinateY = event.nativeEvent.offsetY;
    //     // TODO - need to be in the sentence place (in/on/under...)
    //     if (clickInItem(
    //         (300 / event.target.height) * clickCoordinateX,
    //         (300 / event.target.height) * clickCoordinateY)) {
    //         console.log('click in item');

    //     } else {
    //         console.log('click out of item');
    //     }
    // }

    // return (
    //     <div>
    //         {/* main picture */}
    //         {console.log(imgData)}
    //         <img src={imgData[0].pic} alt="" style={{height: '90vh'}} 
    //         onClick={handlePicClick}
    //         />
    //         <br/>
    //         There is a robot behind the head.
    //     </div>
    // )


