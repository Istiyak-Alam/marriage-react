import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../../pages/Layout'
// import Haldi from '../layout/Haldi'
// import Wedding from '../layout/Wedding'
// import PreWedding from '../layout/PreWedding'
// import RingCeremony from '../layout/RingCeremony'
import Album01 from '../../pages/Album01';
import Album02 from '../../pages/Album02';
import Album03 from '../../pages/Album03';
import Album04 from '../../pages/Album04';
import Ringdrown from '../ringceremony/Ringdrown';
import Predrown from '../prewedding/Predrown';
import Haldidrown from '../haldi/Haldidrown';
import Weddingdrown from '../wedding/Weddingdrown';
import '../../App.css';
import "../../index.css"


export default function Navbar() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='haldi'element={<Album03/>}/>
              <Route path='wedding' element={<Album04/>}/>
              <Route path='preWedding' element={<Album02/>}/>
              <Route path='ringCeremony'element={<Album01/>}/>
              <Route path='ringdrown' element={<Ringdrown/>}/>
              <Route path='predrown' element={<Predrown/>}/>
              <Route path='haldidrown' element={<Haldidrown/>}/>
              <Route path='weddingdrown' element={<Weddingdrown/>}/>
            </Route>
          </Routes>
        </BrowserRouter>    
        {/* <BrowserRouter>
          <Routes>
            <Route path='/' >
              <Route index element={<Home/>}/>
              <Route path='haldi'element={<Haldi/>}/>
              <Route path='wedding' element={<RingCeremony/>}/>
              <Route path='preWedding' element={<Wedding/>}/>
              <Route path='ringCeremony'element={<PreWedding/>}/>
            </Route>
          </Routes>
        </BrowserRouter>     */}
    </div>
  )
}
