import {Link, Outlet } from 'react-router-dom';
import React from 'react';
import RingCeremony from '../components/layout/RingCeremony';
import Wedding from '../components/layout/Wedding';
import PreWedding from '../components/layout/PreWedding';
import Haldi from '../components/layout/Haldi';
import '../App.css';
import '../index.css';

export default function Layout() {
  return (
    <div>
          <div>
            <div className="container-fulid mt-2 mb-3" >
                <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary p-3">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to='/' >Brand Logo</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav justify-content-end">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='/' >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='/prewedding' >Pre-Wedding</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More Products
                                    </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item " aria-current="page" to='/haldi' >Haldi</Link>
                                    </li>
                                    <li><Link className="dropdown-item " aria-current="page" to='/ringceremony' >Ring Ceremony</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item " aria-current="page" to='/wedding' >Wedding</Link></li>
                                </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <br/>
                <br/>
                <br/><br/>
                <div className='container'>
                    <div className='row align-items-center' style={{}}>
                        <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3 shadow bg-body-tertiary rounded ' id='ring'>
                            <RingCeremony/>
                        </div>
                        <div className='card-body col-lg-2 col-md-4  col-sm-4 m-3 shadow bg-body-tertiary rounded'  id='prewed' >
                            <PreWedding/>
                        </div>
                        <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3 shadow bg-body-tertiary rounded' id='haldi'>
                            <Haldi/>
                        </div>
                        <div className='card-body col-lg-2 col-md-4 col-sm-4 m-3 shadow bg-body-tertiary rounded' id='wed'>
                            <Wedding/>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        </div>
        <Outlet />
    </div>
  )
}
