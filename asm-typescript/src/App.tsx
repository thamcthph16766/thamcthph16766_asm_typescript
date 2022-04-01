import { useEffect, useState } from 'react'
import './App.css'

import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"

import type {ProductType} from './types/product'
import {Routes, Route} from 'react-router-dom'

import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import Dashboard from './pages/admin/Dashboard'


import { add, list, remove, update } from './api/product'
import ProductManager from './pages/admin/ProductManager'
import ProductDetail from './pages/ProductDetail'
import ProductAdd from './pages/admin/ProductAdd'
import ProductEdit from './pages/admin/ProductEdit'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import PrivateRouter from './components/PrivateRouter'
import TestShowInfo from './components/TestShowInfo'

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
      const getProducts = async () => {
          const { data } = await list();
          setProducts(data);
      }
      getProducts();
  }, []);

  const onHandleRemove = async (id: string) => {
    try {
      const { data } = await remove(id);
      if(data){
        toast.success("Xoá thành công");
      }  
    } catch (error) {
      toast.error(error.response.data)
    }
  }
  const onHandleAdd = async (product: ProductType) => {
     try {
        const { data } = await add(product);
        if(data){
          toast.success("Thêm thành công");
        }  
     } catch (error) {

     }
  }
  const onHandleUpdate = async (product: ProductType) => {
    try {
       const { data } = await update(product);
       setProducts(products.map(item => item._id === data._id ? product : item))
       if(data){
         toast.success("Sửa thành công");
       }  
    } catch (error) {

    }
 }

  return (
    <div>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" >
              <Route index element={<ProductPage products={products}/>} />
              <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
        </Route>
        <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
          <Route index element={<Dashboard />} />
          <Route path="products">
              <Route index  element={<ProductManager products={products} onRemove={onHandleRemove}/>}/>
              <Route path="add" element={<ProductAdd name ="Tham" onAdd={onHandleAdd}/>}/>
              <Route path=":id/edit" element={<ProductEdit name="Tham" onUpdate={onHandleUpdate}/>}/>
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
