import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
import pin from '../../assets/pin.png'

export default function Card({ item }) {
  return (
    <div className='card'>
        <Link to={`/${item.id}`} className='imageContainer'>
          <img src={item.img} alt='' />
        </Link>
        <div className='textContainer'>
          <h2 className='title'>
            <Link to={`/${item.id}`} className='imageContainer'>
              {item.title}
            </Link>
          </h2>
          <p className='address'>
            <img src={pin} alt='' />
            <span>{item.address}</span>
          </p>
          <p className='price'>$ {item.price}</p>
          <div className='bootom'>
            <div className='features'>
              <div className='feature'>
                <img src={bed} alt='' />
                <span>{item.bedroom} bedroom</span>
              </div>
              <div className='feature'>
                <img src={bath} alt='' />
                <span>{item.bathroom} bathroom</span>
              </div>
            </div>
            <div className='icons'>
              <div className='icon'>
                <img src={save} alt='' />
              </div>
              <div className='icon'>
                <img src={chat} alt='' />
              </div>
              
            </div>
          </div>
        </div>
    </div>
  )
}
