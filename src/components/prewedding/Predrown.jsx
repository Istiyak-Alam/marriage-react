import React from 'react'
import ReactPlayer from 'react-player';

import img1 from '../../imgs/prewedding/prewedding_01.jpg'
import img2 from '../../imgs/prewedding/prewedding_02.jpg'
import img3 from '../../imgs/prewedding/prewedding_03.jpg'
import img4 from '../../imgs/prewedding/prewedding_04.jpg'
import img5 from '../../imgs/prewedding/prewedding_05.jpg'
import img6 from '../../imgs/prewedding/prewedding_06.jpg'
import img7 from '../../imgs/prewedding/prewedding_07.jpg'
import img8 from '../../imgs/prewedding/prewedding_08.jpg'
import { Link } from 'react-router-dom';

export default function Predrown() {
  let style={
    backgroundColor:"lightblue",
}

let vidoes={
    url:"https://www.youtube.com/watch?v=nldx9kD66PY&pp=ygUXcHJlIHdlZGRpbmcgZHJvbmUgc2hvdCA%3D",
    title:"Chikmagalur Pre Wedding Drone Shoot | Cinematic Pre Wedding Shoot | Drone Shots",
    dis:"Our Latest  Drone Pre Wedding Shoot, Collab with Ezekiya Photography, Hosur",
}
let vidoe1={
    url:"https://www.youtube.com/watch?v=9SpSJ_GC12M&pp=ygUXcHJlIHdlZGRpbmcgZHJvbmUgc2hvdCA%3D",
    title:"Best Prewedding Teaser 2023 | Chintan X Bhumi | Dream & Frames | Rclicks | Vadodara",
    dis:"Best Prewedding Teaser 2023 | Chintan X Bhumi | Dream & Frames | Rclicks | Vadodara",
}
let vidoe2={
    url:"https://www.youtube.com/watch?v=m2fM4i0JC6w&pp=ygUXcHJlIHdlZGRpbmcgZHJvbmUgc2hvdCA%3D",
    title:"pre wedding Drone shoot ❤️",
    dis:"pre wedding Drone shoot ❤️",
}
let vidoe3={
    url:"https://www.youtube.com/watch?v=n74iPi3pm10&pp=ygUXcHJlIHdlZGRpbmcgZHJvbmUgc2hvdCA%3D",
    title:"JAIPUR I BEST PRE-WEDDING VIDEO I 2021 I DRONE & NIDHI I THE PICTURE WALA I INDIA",
    dis:"The Picture Wala",
}


  return (
    <div>
      <div className="container-fulid mt-2 mb-3">
            <h1 className='text-center text-uppercase p-4 text-white' style={style}>Top Pre-Wedding Shoots</h1>
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
            <h1 className='text-center text-uppercase p-4 text-white' style={style}>Top Pre-Wedding Video Shoots</h1>
            <div className="container text-center">
                <div className='row align-items-center'>
                    <div className='card-body col-lg-5 col-md-4 col-sm-4 m-3'>
                        <div class="card">
                        <ReactPlayer  url={vidoes.url} width="640" height="500px" controls muted />
                            <div class="card-body">
                                <h5 class="card-title">{vidoes.title}</h5>
                                <p class="card-text">{vidoes.dis}</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card" >
                        <ReactPlayer url={vidoe1.url} width="640" height="500px" controls/>
                            <div class="card-body">
                                <h5 class="card-title">{vidoe1.title}</h5>
                                <p class="card-text">{vidoe1.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center'>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div class="card" >
                        <ReactPlayer url={vidoe2.url} width="640" height="500px" controls />
                            <div class="card-body">
                                <h5 class="card-title">{vidoe2.title}</h5>
                                <p class="card-text">{vidoe2.dis}</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-body col-lg-5 col-md-4 col-sm-4 m-3'>
                        <div class="card">
                        <ReactPlayer url={vidoe3.url} width="640" height="500px" controls/>
                            <div class="card-body">
                                <h5 class="card-title">{vidoe3.title}</h5>
                                <p class="card-text">{vidoe3.dis}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link className='btn btn-outline-primary ' to='/'>Back To Home</Link>
        </div> 
    </div>
  )
}
