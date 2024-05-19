import React from 'react'
import TopPreWedding from '../components/prewedding/TopPreWedding'


export default function Album02() {
    let style={
        backgroundColor:"lightblue",
    }
  return (
    <div>
        <div className=''>
      <h1 className='text-center text-uppercase p-4 text-white' style={style}>Top Pre-Wedding Shoots</h1>
            <div className='cantainer'>
                <div>
                   <TopPreWedding/>
                </div>
            </div>
        </div>
    </div>
  )
}
