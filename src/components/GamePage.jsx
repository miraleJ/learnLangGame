import React, { useState, useEffect } from 'react'
import imgData from '../data/imgData'
import hidingData from '../data/hidingItems'
import Picture from './Picture';
import Sentence from './Sentence';
import '../style/gamePage.css'

export default function GamePage() {
    const [nowPic, setNowPic] = useState(null);
    const [nowTag, setNowTag] = useState({});
    const [nowSentence, setNowSentence] = useState([]);

    const randomIntUnder = (max) => {
        return Math.floor(Math.random() * max);
    }

    const newGameState = () => {
        const picNum = randomIntUnder(imgData.length);
        setNowPic(imgData[picNum].pic);
        setNowTag(imgData[picNum].tagsAndPlace[randomIntUnder(imgData[picNum].tagsAndPlace.length)]);
        setNowSentence(['There is a robot behind the', `${nowTag.tagName}`]);
    }

    useEffect (() => {
        newGameState()
    }, [])

    return (
        <div>
            <div className='gameSide'>
                {/* random picture */}
                <Picture pic={nowPic} />
                {/* sentence */}
                <Sentence s={nowSentence} />
            </div>
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


