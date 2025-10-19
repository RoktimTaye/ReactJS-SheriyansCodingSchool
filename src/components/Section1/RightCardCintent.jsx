import React from 'react'

const RightCardCintent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='text-xl font-semibold bg-white rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-shadow-8xs text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quis, neque voluptate qui expedita quaerat eius eligendi unde ratione officia!</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 font-medium text-white rounded-full px-8 py-2'>{props.tag}</button>
                    <button className='bg-blue-600 font-medium text-white rounded-full px-3 py-2'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardCintent