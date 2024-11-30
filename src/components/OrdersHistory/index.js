import React from 'react'
import Header from '../Header'
import './index.css'

const OrdersHistory = () => {
    return (
        <>
            <Header />
            <div className='orders-history-container'>
                <img src='https://icons.veryicon.com/png/o/application/map-app/no-order-3.png' alt='history' className='booking-image'/>
                <p>No History Found</p>
            </div>
        </>
    )
}

export default OrdersHistory