import React from 'react'
import { SubmitHandler, useForm} from 'react-hook-form';
import { ProductType } from '../types/product';
import { signin} from '../api/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type FormInputs = {
    email: string,
    password: string | number
}

const Signin = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSumbit: SubmitHandler<FormInputs> = async (user) => {
        const { data } = await signin(user);
        if(data){
            toast.success("Bạn đã đăng nhập thành công");
            setTimeout(() => {
                navigate('/')
                localStorage.setItem("user",JSON.stringify(data))
            }, 3000)
        }
    }
  return (
    <div className='text-center'>
        <main className="form-signin">
            <form  onSubmit={handleSubmit(onSumbit)}>
                <h1 className="h3 mb-3 fw-normal pt-2">Please sign in</h1>
                <div className="form-floating py-2">
                <input  type="email" className="form-control"  {...register('email')} placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating py-2">
                <input  type="password" className="form-control"  {...register('password')} placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="py-2 w-30 btn btn-lg btn btn-primary">Sign in</button>
            </form>
        </main>
        <ToastContainer />
    </div>
  )
}

export default Signin
