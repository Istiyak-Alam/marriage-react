import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import img1 from'../../imgs/ringceremony/ringceremony_01.jpg'
import img2 from'../../imgs/ringceremony/ringceremony_02.jpg'
import img3 from'../../imgs/ringceremony/ringceremony_03.jpg'
import img4 from'../../imgs/ringceremony/ringceremony_04.jpg'
import img5 from'../../imgs/ringceremony/ringceremony_05.jpg'
import img6 from'../../imgs/ringceremony/ringceremony_06.jpg'
import img7 from'../../imgs/ringceremony/ringceremony_07.jpg'
import img8 from'../../imgs/ringceremony/ringceremony_08.jpg'

export default function TopShoots() {
  return (
    <div>
        <div className="container-fulid mt-2 mb-3" >
            <div className="container text-center">
                <div className='row align-items-center'>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card" id='topring'>
                            <img src={img1} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card"  id='topring'>
                            <img src={img2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card"  id='topring'>
                            <img src={img3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card"  id='topring'>
                            <img src={img4} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center'>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card"  id='topring'>
                            <img src={img5} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card"  id='topring'>
                            <img src={img6} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card"  id='topring'>
                            <img src={img7} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card"  id='topring'>
                            <img src={img8} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <Link className='btn btn-outline-primary ' to='/ringdrown'>Explore Our Work</Link>
                </div>
            </div>
            <Outlet/>
        </div>   
    </div>
  )
}
