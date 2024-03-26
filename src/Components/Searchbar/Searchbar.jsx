import React, { useState } from 'react'
import './Searchbar.scss'

const types = ["buy", "rent"]

export default function Searchbar() {
    const [query, setquery] = useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0,
    })

    const switchType = (val) =>{
        setquery((prev)=>({...prev, type: val}))
    }

  return (
    <div className='searchbar'>
        <div className='type'>
            {types.map((type) => (
                <button 
                    key={type} onClick={() => switchType(type)}
                    className={query.type === type ? "actve" : ""}
                >
                    {type}
                </button>

            ))}
        </div>
        <form>
            <input type='text' name="location" placeholder='City Location' />
            <input
            type='number'
            name='minPrice'
            min={0}
            max={100000000}
            placeholder='Min Price'
            />

            <input type='text' name="location" placeholder='City Location' />
            <input
            type='number'
            name='maxPrice'
            min={0}
            max={100000000}
            placeholder='Max Price'
            />
            <button>
                {/* <img src={search} alt='' /> */}
            </button>
        </form>
    </div>
  )
}
