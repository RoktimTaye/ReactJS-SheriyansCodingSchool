import React from 'react'
import RightCardCintent from './RightCardCintent'

const RightCard = (props) => {
    return (
        <div className='h-full flex-shrink-0 w-86 overflow-hidden bg-red-400 rounded-4xl relative'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            <RightCardCintent id={props.id} tag={props.tag}/>
        </div>
    )
}

export default RightCard