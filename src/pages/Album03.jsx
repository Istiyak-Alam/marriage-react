import React from 'react'
import TopHaldiShoots from '../components/haldi/TopHaldiShoots'

export default function Album03() {
    let style={
        backgroundColor:"lightblue",
    }
  return (
    <div>
        <div className=''>
        <h1 className='text-center text-uppercase p-4' style={style}>Top Haldi Shoots</h1>

            <div className='cantainer'>
                <div>
                   <TopHaldiShoots/> 
                </div>
                
            </div>
        </div>
    </div>
  )
}
