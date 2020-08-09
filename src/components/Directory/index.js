import React from 'react'

import samsung from './../../assets/samsung.jpg'
import apple from './../../assets/apple.jpg'

import './styles.scss'

const Directory = () => {
    return (
       <div className="directory">
           <div className="wrap">
               <div className="item item-left"
               style={{
                   backgroundImage : `url(${samsung})`
               }}
               >
                   <a href="">Samsung Products</a>
               </div>
               <div className="item item-right"
               style={{
                   backgroundImage : `url(${apple})`
               }}
               >
                   <a href="">Apple Products</a>
               </div>
           </div>
       </div>
    )
}

export default Directory
