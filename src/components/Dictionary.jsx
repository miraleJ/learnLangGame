import React from 'react'

export default function Dictionary(props) {
    const handleClick = () => {
        props.handleClick(-1);
    }

    return (
        <div className='dictionary'>
            <h3>Dictionary</h3>
            Translate cost - 1 point!
            <input type="text"/>
            <button onClick={handleClick}>translate</button>
        </div>
    )
}
