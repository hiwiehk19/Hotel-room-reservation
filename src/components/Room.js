import React from 'react'
import { Link } from 'react-router-dom'
export default function Room(room) {
    const{name , slug, images, price} =room;
    return (
       <article className='room'>
           <div className='img-container'>
               <img src={images}
               alt='single room'/>
           </div>
       </article>
    )
}
 