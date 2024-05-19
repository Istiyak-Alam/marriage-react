import React from 'react'
import ReactPlayer from 'react-player'

import img1 from '../../imgs/haldi/haldi_01.jpg'
import img2 from '../../imgs/haldi/haldi_02.jpg'
import img3 from '../../imgs/haldi/haldi_03.jpg'
import img4 from '../../imgs/haldi/haldi_04.jpg'
import img5 from '../../imgs/haldi/haldi_05.jpg'
import img6 from '../../imgs/haldi/haldi_07.jpg'
import img7 from '../../imgs/haldi/haldi_08.jpg'
import img8 from '../../imgs/haldi/haldi_10.jpg'
import { Link } from 'react-router-dom';

export default function Haldidrown() {
    let style={
        backgroundColor:"lightblue"
    }
  return (
    <div>
        <div className="container-fulid mt-2 mb-3">
            <h1 className='text-center text-uppercase p-4 text-white' style={style}>Top Haldi Shoots</h1>
            <div className="container text-center">
                <div className='row align-items-center'>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card">
                            <img src={img1} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card" >
                            <img src={img2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card">
                            <img src={img3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card" >
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
                        <div class="card">
                            <img src={img5} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card" >
                            <img src={img6} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card">
                            <img src={img7} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card" >
                            <img src={img8} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-center text-uppercase p-4 text-white' style={style}>Top Haldi Video Shoots</h1>
            <div className="container text-center">
                <div className='row align-items-center'>
                    <div className='card-body col-lg-5 col-md-4 col-sm-4 m-3'>
                        <div class="card">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=McTO4T96lAo&pp=ygURSGFsZGkgZHJvbmUgc2hvdCA%3D"
                            width="640"
                            height="500px"
                            controls
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card" >
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=mzHhUmH-Wgs&pp=ygURSGFsZGkgZHJvbmUgc2hvdCA%3D"
                            width="640"
                            height="500px"
                            controls
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center'>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card" >
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=Hjcik4jvp3k&pp=ygURSGFsZGkgZHJvbmUgc2hvdCA%3D"
                            width="640"
                            height="500px"
                            controls
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-body col-lg-5 col-md-4 col-sm-4 m-3'>
                        <div class="card">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=PBXvTf1ssbg&pp=ygURSGFsZGkgZHJvbmUgc2hvdCA%3D"
                            width="640"
                            height="500px"
                            controls
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <Link className='btn btn-outline-primary ' to='/'>Back To Home</Link>
    </div>
  )
}
