import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div className='pt-2'>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow py-2">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">Trang chủ</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
            <a href="#"><button type="button" className="btn btn-outline-light me-2 px-4">Search</button></a>
        </header>

        <div className="row pt-6">
            <div className="col-3">
           <aside>
                <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: 280}}>
                    
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                        <a href="/" className="nav-link active" aria-current="page">
                            Home
                        </a>
                        </li>
                        <li>
                        <a href="/admin/products" className="nav-link text-white">
                            Products
                        </a>
                        </li>
                        <li>
                        <a href="/signup" className="nav-link text-white">
                            Sign-up
                        </a>
                        </li>
                        <li>
                        <a href="/signin" className="nav-link text-white">
                            Sign-in
                        </a>
                        </li>
                        <li>
                        <a href="#" className="nav-link text-white">
                            Users
                        </a>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" width={32} height={32} className="rounded-circle me-2" />
                        <strong>thamcthph16766</strong>
                        </a>
                    </div>
                    </div>

                </aside>

            </div> 
            <div className="col-9">
                <main>
                    <Outlet/>
                </main>    
            </div>
        </div>
    </div>
  )
}

export default AdminLayout