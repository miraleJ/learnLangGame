import React from 'react'
import hidedItem from '../images/head.png'

export default function Picture(props) {
    const clickInItem = (x, y) => {
        return (
        (x >= props.tag.startC[0] && 
        x <= props.tag.endC[0] && 
        y >= props.tag.startC[1] && 
        y <= props.tag.endC[1]) ?
        true : false);
    }

    const handleClick = (event) => {
        console.log('in picture handle click')
        
        const clickCoordinateX = event.nativeEvent.offsetX;
        const clickCoordinateY = event.nativeEvent.offsetY;
        // TODO - need to be in the sentence place (in/on/under...)
        if (clickInItem(
            (300 / event.target.height) * clickCoordinateX,
            (300 / event.target.height) * clickCoordinateY)) {
            console.log('click in item');
            props.handleClick(5)

        } else {
            console.log('click out of item');
        }
    }    

    return (
        <div className='img-container'>
            <img className='mainPic' src={`${props.pic}`} alt="" onClick={handleClick} />
            <img className='hiding-item' src={hidedItem} alt="" />
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