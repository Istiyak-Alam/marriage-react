import React from 'react'
import ReactPlayer from 'react-player';

import img1 from '../../imgs/wedding/wedding_01.jpg'
import img2 from '../../imgs/wedding/wedding_02.jpg'
import img3 from '../../imgs/wedding/wedding_03.jpg'
import img4 from '../../imgs/wedding/wedding_04.jpg'
import img5 from '../../imgs/wedding/wedding_05.jpg'
import img6 from '../../imgs/wedding/wedding_06.jpg'
import img7 from '../../imgs/wedding/wedding_07.jpg'
import img8 from '../../imgs/wedding/wedding_08.jpg'
import { Link } from 'react-router-dom';

export default function Weddingdrown() {
  let style={
    backgroundColor:"lightblue",
}
  return (
    <div>
      <div className="container-fulid mt-2 mb-3">
            <h1 className='text-center text-uppercase p-4 text-white' style={style}>Top Wedding Shoots</h1>
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
            <h1 className='text-center text-uppercase p-4 text-white' style={style}>Top WeddingVideo Shoots</h1>
            <div className="container text-center">
                <div className='row align-items-center'>
                    <div className='card-body col-lg-5 col-md-4 col-sm-4 m-3'>
                        <div class="card">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=-fbijJloXJs&pp=ygUTd2VkZGluZyBkcm9uZSBzaG90IA%3D%3D"
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
                            url="https://www.youtube.com/watch?v=uR8xgrfLQ0Y&pp=ygUTd2VkZGluZyBkcm9uZSBzaG90IA%3D%3D"
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
                            url="https://www.youtube.com/watch?v=2xumbeRveb0&pp=ygUTd2VkZGluZyBkcm9uZSBzaG90IA%3D%3D"
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
                            url="https://www.youtube.com/watch?v=S8bVO80YhCc&pp=ygUTd2VkZGluZyBkcm9uZSBzaG90IA%3D%3D"
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
                    <Link className='btn btn-outline-primary ' to='/'>Back To Home</Link>
                </div>
                 
            </div>
        </div> 
    </div>
  )
}
