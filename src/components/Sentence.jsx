import React from 'react'

export default function Sentence(props) {
    return (
        <h2 className='sentence'>{props.s[0]} <span>{props.s[1]}</span>.</h2>
    )
}
