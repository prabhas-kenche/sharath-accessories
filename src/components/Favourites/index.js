import React from 'react'

import Header from '../Header'

import './index.css'

const Favourites = () => {
    return (
        <>
            <Header />
            <div className='favourites-container'>
                <img src='https://static.vecteezy.com/system/resources/previews/049/793/365/non_2x/icon-solid-glyph-hands-hold-love-shape-editable-file-vector.jpg' alt='favourites-image' className='favourites-image' />
                <p>Add Your Favourites</p>
                <p></p>
            </div>
        </>
    )
}

export default Favourites