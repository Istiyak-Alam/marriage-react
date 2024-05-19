import React from 'react'
import TopWedding from '../components/wedding/TopWedding'

export default function Album04() {
    let style={
        backgroundColor:"lightblue",
    }
  return (
    <div>
        <div className=''>
        <h1 className='text-center text-uppercase p-4 text-white' style={style}>Top Wedding Shoots</h1>
            <div className='cantainer'>
                <div>
                   <TopWedding/>
                </div>
            </div>
        </div>
    </div>
  )
}
