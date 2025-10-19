import React from 'react'
import RightCard from './RightCard'
import RightCardCintent from './RightCardCintent'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-7 p-6 w-2/3'>
      {props.users.map(function (elem,idx) {
        return <RightCard key = {idx} id= {idx} img= {elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent