import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../../imgs/haldi/haldi_01.jpg'
import img2 from '../../imgs/haldi/haldi_02.jpg' 
import img3 from '../../imgs/haldi/haldi_03.jpg'

export default function Haldi() {
  return (
    <div>
      <div className="container-fulid mt-2 mb-3">
            <div className="container text-center">
                <div className='row align-items-center'>
                    <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3'>
                        <div id="carouselExampleControlsNoTouching2" class="carousel slide" data-bs-touch="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src={img1} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src={img2} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src={img3} class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching2" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching2" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className=' border'>
                            <h5 className='text-capitalize card-title m-4'>🎊Haldi Shoots🎊</h5>
                            <Link className='btn btn-outline-primary card-btn  m-2' to='haldi'>Explore More</Link>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}
