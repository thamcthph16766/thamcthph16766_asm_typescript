import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
              </a>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
                <li><a href="/products" className="nav-link px-2 text-white">Product</a></li>
                <li><a href="#" className="nav-link px-2 text-white">Admin</a></li>
              </ul>

              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
              </form>

              <div className="text-end">
                <a href="/signin"><button type="button" className="btn btn-outline-light me-2">Sign-in</button></a>
                <a href="/signup"><button type="button" className="btn btn-warning text-white">Sign-up</button></a>
              </div>
            </div>
          </div>
        </header>

        <main>
            <Outlet/>
        </main>

        
          <div className="container">
            <footer className="py-3 my-4">
              <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a href="/products" className="nav-link px-2 text-muted">Product</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Liên hệ</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Hỗ trợ</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Tin tức</a></li>
              </ul>
              <p className="text-center text-muted">© thamcthph16766</p>
            </footer>
          </div>
        
    </div>
  )
}

export default WebsiteLayout