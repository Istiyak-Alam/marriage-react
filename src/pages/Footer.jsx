import React from 'react'

export default function Footer() {
  return (
    <div>
        <div className='container-fulid bg-white' style={{marginTop: "76px"}}>
            <div className='container'>
                <div className='row align-items-center p-3'>
                    <hr/>  
                    <div className='col col-xs-12 col-sm-12 col-md-3 '>
                        <h3>Brand Logo</h3>
                        <p>Lorem ipsum dolor sit, 
                            amet consectetur adipisicing elit. 
                            Maxime iure vero, nostrum mollitia 
                        </p>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-3'>  
                            <h5> Quick links </h5>  
                            <ul class="list-unstyled quick-links">  
                                <li> <a className=' nav-link' href="#"> <i class="fa fa-angle-double-right"> </i> Home </a> </li>  
                                <li> <a className=' nav-link' href="#"> <i class="fa fa-angle-double-right"> </i> About </a> </li>  
                                <li> <a className=' nav-link' href="#"> <i class="fa fa-angle-double-right"> </i> FAQ </a> </li>  
                                <li> <a className=' nav-link' href="#"> <i class="fa fa-angle-double-right"> </i> Our Services </a> </li>  
                                <li> <a className=' nav-link' href="#"> <i class="fa fa-angle-double-right"> </i> Expert Team </a> </li>  
                            </ul>  
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-3'>
                        <h1>Other Section</h1>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-3 '>
                        <ul class="list-unstyled list-inline social text-center">  
                            <li class="list-inline-item"> <a href="#"> <i class="fa fa-facebook"> </i> </a> </li>  
                            <li class="list-inline-item"> <a href="#"> <i class="fa fa-twitter"> </i> </a> </li>  
                            <li class="list-inline-item"> <a href="#"> <i class="fa fa-instagram"> </i> </a> </li>  
                            <li class="list-inline-item"> <a href="#"> <i class="fa fa-google-plus"> </i > </a> </li>  
                            <li class="list-inline-item"> <a href="#"> <i class="fa fa-envelope"> </i> </a> </li>  
                        </ul>  
                    </div>
                    <br/>
                    <div class="row ">  
                        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center m-4">  
                            <p class="h6"> 2024 @ All right Reversed.  Compamy Name</p>  
                        </div>  
                        <hr/>  
                    </div>
                </div>                
            </div>
        </div>
    </div>
  )
}
