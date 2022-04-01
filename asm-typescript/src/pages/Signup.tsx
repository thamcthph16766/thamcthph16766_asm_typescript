import React from 'react'
import { SubmitHandler, useForm} from 'react-hook-form';
import { ProductType } from '../types/product';
import { signup } from '../api/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type FormInputs = {
    name: string,
    email: string,
    password: string | number
}

const Signup = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSumbit: SubmitHandler<FormInputs> = async (user) => {
        const { data } = await signup(user);
        if(data){
            toast.success("Bạn đã đăng ký thành công");
            setTimeout(() => {
                navigate('/signin')
            }, 3000)
        }
    }
  return (
    <div className='pt-4'>
        
        <main className="form-signup">
            <form  onSubmit={handleSubmit(onSumbit)}>
                <h1 className="h3 mb-3 fw-normal pt-2 text-center">Please sign up</h1>
                <div className="form-floating py-2">
                <input  type="name" className="form-control"  {...register('name')} placeholder="Name" />
                <label htmlFor="floatingInput">Last name</label>
                </div>
                <div className="form-floating py-2">
                <input  type="email" className="form-control"  {...register('email')} placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating py-2">
                <input  type="password" className="form-control"  {...register('password')} placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="py-2 btn btn-primary">Sign up</button>
            </form>
        </main>
        <ToastContainer />
    </div>
  )
}

export default Signup