import React from 'react'

export default function Picture(props) {
    return (
        <img className='mainPic' src={`${props.pic}`} alt=""/>
    )
}
