import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import type {ProductType} from './types/product'
import { Navigate, NavLink, Routes, Route} from 'react-router-dom'

import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import Dashboard from './pages/admin/Dashboard'

import {list} from './api/product'
import ProductManager from './pages/ProductManager'
import ProductDetail from './pages/ProductDetail'
import ProductAdd from './pages/admin/ProductAdd'

function App() {
  const [products, setProducts] = useState<ProductType[]>([])
  
  useEffect(() =>{
    const getProducts = async ()=> {
      const {data} = await list();
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <div className="App">
      <header>
        <ul>
          <li><NavLink to="/">HomePage</NavLink></li>
          <li><NavLink to="/product">ProductPage</NavLink></li>
          <li><NavLink to="/admin">Admin</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout/>}>
            <Route index element={<HomePage/>} />
            <Route path="product">
              <Route index element={<ProductPage/>} />
              <Route path=":id" element={ProductDetail} />
            </Route>
            <Route path="admin" element={<AdminLayout />}>
              {/* <Route path='/product/add' element={<ProductAdd/>}/> */}

                <Route index element={<Navigate to="/admin/dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products" element={<ProductManager products={products} />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
