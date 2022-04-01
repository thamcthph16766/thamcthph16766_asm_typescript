import React, { useEffect } from 'react'
import { SubmitHandler, useForm} from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read, update } from '../../api/product';
import { ProductType } from '../../types/product';

type ProductAddProps = {
    name: string
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number
}

const ProductEdit = (props: ProductAddProps) => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset} = useForm<FormInputs>();
    const navigate = useNavigate();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data)
        }
        getProduct();
    }, [id])


    const onSumbit: SubmitHandler<FormInputs> = (data) => {
        props.onUpdate(data);
        navigate("/admin/products");
    }

  return (
    <div>
        
        <form onSubmit={handleSubmit(onSumbit)}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" {...register('name')} />
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" className="form-control"  {...register('price')} />
            </div>
            <button className="btn btn-primary border-b-green-600 bg-green-600">Update</button>
        </form>

    </div>
  )
}

export default ProductEdit