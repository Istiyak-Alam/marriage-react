import React from 'react'
import TopShoots from '../components/ringceremony/TopShoots'

export default function Album01() {
    let style={
        backgroundColor:"lightblue",
    }
  return (
    <div>
        <div className=''>
        <h1 className='text-center text-uppercase p-4'  style={style}>Top Ring CereMony Shoots</h1>
            <div className='cantainer'>
                <div>
                   <TopShoots/> 
                </div>
            </div>
        </div>
    </div>
  )
}
