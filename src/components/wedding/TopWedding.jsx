import React from 'react'
import img1 from '../../imgs/wedding/wedding_01.jpg'
import img2 from '../../imgs/wedding/wedding_02.jpg'
import img3 from '../../imgs/wedding/wedding_03.jpg'
import img4 from '../../imgs/wedding/wedding_04.jpg'
import img5 from '../../imgs/wedding/wedding_05.jpg'
import img6 from '../../imgs/wedding/wedding_06.jpg'
import img7 from '../../imgs/wedding/wedding_07.jpg'
import img8 from '../../imgs/wedding/wedding_08.jpg'
import { Link } from 'react-router-dom'


export default function Topwedding() {
  return (
    <div>
       <div className="container-fulid mt-2 mb-3">
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
                    <Link className='btn btn-outline-primary ' to='/weddingdrown'>Explore Our Work</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
