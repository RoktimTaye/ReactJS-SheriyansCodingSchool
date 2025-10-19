import React from 'react'
import 'remixicon/fonts/remixicon.css'
const LeftContent = () => {
    return (
        <div className='h-full flex flex-col justify-between w-1/3'>
            <div className='p-5'>
                <h3 className='mb-7 text-7xl font-bold'>Prospective <br /> 
                <span className='text-gray-500'>Customer</span> <br /> Segmentation</h3>
                <p className='text-xl font-medium text-gray-600'>A bank is a financial institution where people can deposit money for safekeeping, and also borrow money through loans. In simple terms, it acts as a middleman that takes money from people who save it and lends that money to those who need to borrow it for things like buying a house or starting a business.  </p>
            </div>
            <div className='text-8xl'>
                <i className="ri-arrow-right-up-line"></i>
            </div>
        </div>
    )
}

export default LeftContent