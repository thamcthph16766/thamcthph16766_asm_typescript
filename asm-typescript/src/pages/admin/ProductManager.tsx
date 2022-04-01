import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProductType } from '../../types/product';

type ProductManagerProps = {
    products: ProductType[],
    onRemove: (id: number) => void

}
const ProductManager = (props: ProductManagerProps) => {

  return (
    <div className='pr-10'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th></th>
                </tr>
                
            </thead>
            <tbody>
                {props.products?.map((product,index) => {
                    return  <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>
                            <Link to={`/admin/products/${product._id}/edit`} className="btn btn-primary border-b-green-600 bg-green-600">Update</Link>
                        </td>
                        <td><button className='btn btn-primary border-b-red-600 bg-red-600' onClick={() => props.onRemove(product._id)}>Delete</button></td>
                    </tr>
                })}
            </tbody>
            <Link to={`/admin/products/add`} className="btn btn-primary">Add</Link>
        </table>
        
        
    </div>
  )
}

export default ProductManager