import React from 'react'
import hidedItem from '../images/head.png'

export default function Picture(props) {
    return (
        <div className='img-container'>
            <img className='mainPic' src={`${props.pic}`} alt=""/>
            <img className='hiding-item' src={hidedItem} alt="" />
        </div>
    )
}
