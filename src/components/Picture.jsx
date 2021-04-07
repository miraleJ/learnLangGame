import React, { useState, useRef } from 'react'
import hidedItem from '../images/head.png'

export default function Picture(props) {
    const [nowStyle, setNowStyle] = useState({
        top: '0px',
        left: '0px',
        height: '50px',
        zIndex: '10'
    });
    const [nowClassName, setNowClassName] = useState('hiding-item');
    const containerRef = useRef(null);
    const hidingRef = useRef(null);

    const calculateHidingLeft = (event) => {
        return ((containerRef.current.clientWidth - event.target.clientWidth) / 2 + (event.target.clientHeight / 300) * props.tag.startC[0] - hidingRef.current.clientWidth / 1.7);
    }

    const calculateHidingTop = (event) => {
        return ((containerRef.current.clientHeight - event.target.clientHeight) / 2 + (event.target.clientHeight / 300) * props.tag.startC[1] - hidingRef.current.clientHeight / 1.7);
    }

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
            (300 / event.target.clientHeight) * clickCoordinateX,
            (300 / event.target.clientHeight) * clickCoordinateY)) {
            console.log('click in item');
            props.handleClick(5);
            setNowClassName('showing-item');
            // make the hiding item in the right size and in the right place
            setNowStyle({
                top: `${calculateHidingTop(event)}px`,
                left: `${calculateHidingLeft(event)}px`,
                height: `${(props.tag.endC[1] - props.tag.startC[1]) * (125 / 100)}px`,
            })
            
        } else {
            console.log('click out of item');
        }
    }    

    return (
        <div ref={containerRef} className='img-container'>
            <img className='mainPic' src={`${props.pic}`} alt="" onClick={handleClick} />
            <img className={nowClassName} ref={hidingRef} src={hidedItem} alt="" style={nowStyle}/>
        </div>
    )
}
