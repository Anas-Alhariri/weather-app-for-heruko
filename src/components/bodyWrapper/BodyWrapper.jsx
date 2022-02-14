import React from 'react'
import './BodyWrapper.scss'
const BodyWrapper = (props) => {
    return (
        <div className='bodywrapper'>
            {props.children}
        </div>
    )
}

export default BodyWrapper
