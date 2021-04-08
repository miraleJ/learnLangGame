import React, { useState, useEffect } from 'react'
import imgData from '../data/imgData'
// import hidingData from '../data/hidingItems'
import Picture from './Picture';
import Sentence from './Sentence';
import '../style/gamePage.css';
import Points from './Points';
import Dictionary from './Dictionary';

export default function GamePage() {
    const [nowPic, setNowPic] = useState(null);
    const [nowTag, setNowTag] = useState({
        tagName: '',
        startC: [0,0],
        endC: [0,0]
    });
    const [nowSentence, setNowSentence] = useState([]);
    const [nowPoints, setNowPoints] = useState(10);

    const randomIntUnder = (max) => {
        return Math.floor(Math.random() * max);
    }

    const newGameState = () => {
        const picNum = randomIntUnder(imgData.length);
        const tagNum = randomIntUnder(imgData[picNum].tagsAndPlace.length);
        setNowPic(imgData[picNum].pic);
        setNowTag(imgData[picNum].tagsAndPlace[tagNum]);
        setNowSentence(['There is a robot behind the', `${imgData[picNum].tagsAndPlace[tagNum].tagName}`]);
    }

    useEffect (() => {
        newGameState()
    }, [])

    const handleClick = (addNewPoints) => {
        setNowPoints(nowPoints + addNewPoints);
    }

    const nextStage = () => {
        newGameState();
    }

    return (
        <div className='gamePage'>
            <div className='gameSide'>
                {/* random picture */}
                <Picture 
                    pic={nowPic} 
                    tag={nowTag} 
                    handleClick={handleClick}
                    nextStage={nextStage}
                />
                {/* sentence */}
                <Sentence s={nowSentence} />
            </div>
            <div className='dashboard'>
                {/* points */}
                <Points nowPoints={nowPoints} />
                <br/>
                Points
                <br/>
                <Dictionary handleClick={handleClick} />
            </div>
        </div>
    )
}
