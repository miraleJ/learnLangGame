import React from 'react'
import imgData from '../data/imgData'

export default function GamePage() {
    const clickInItem = (x, y) => {
        return (
        x >= imgData[0].tagsAndPlace[0].startC[0] && 
        x <= imgData[0].tagsAndPlace[0].endC[0] && 
        y >= imgData[0].tagsAndPlace[0].startC[1] && 
        y <= imgData[0].tagsAndPlace[0].endC[1] ?
        true : false);
    }

    const handlePicClick = (event) => {
        console.log(event)
        const clickCoordinateX = event.nativeEvent.offsetX;
        const clickCoordinateY = event.nativeEvent.offsetY;
        // TODO - need to be in the sentence place (in/on/under...)
        if (clickInItem(clickCoordinateX, clickCoordinateY)) {
            console.log('click in item');
        } else {
            console.log('click out of item');
        }
    }

    return (
        <div>
            {/* main picture */}
            {console.log(imgData)}
            <img src={imgData[0].pic} alt="aaaasssss" style={{height: '100vh'}} 
            onClick={handlePicClick}
            />
            <br/>
            There is a robot behind the head.
        </div>
    )
}


// import React from 'react'

// export default function GamePage{
//     const handlePicClick = (event) => {
//         console.log(event)
//     }

//     return (
//         <div>
//             {/* main picture */}
//             {console.log(imgData)}
//             <img src={imgData[0].pic} alt="aaaasssss" style={{height: '100vh'}} 
//             onClick={handlePicClick}
//             />
//             <br/>
//             There is a robot behind the head.
//         </div>
//     )
// }
