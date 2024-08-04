import React from 'react'
import './AuthPage.scss'
import 'boxicons'

const AuthPage = () => {
    return (
        <div className="auth-page-div h-full w-full fixed">
            <div className="container m-auto h-full flex justify-center items-center">
                <div className="form-div w-80 h-80 text-white">
                    <form action="">
                        <h1 className='text-center py-5 text-3xl'>Sign In</h1>
                        <div className="input-div relative mb-3">
                            <input type="text" placeholder='Username' className='w-[calc(100%-2.5rem)] h-10 mx-5 px-3 pr-9 rounded-3xl bg-transparent' required />
                            <box-icon name='user' type='solid' color='white'></box-icon>
                        </div>
                        <div className="input-div relative">
                            <input type="password" placeholder='Password' className='w-[calc(100%-2.5rem)] h-10 mx-5 px-3 pr-9 rounded-3xl bg-transparent' required />
                            <box-icon type='solid' name='lock-alt' color='white'></box-icon>
                        </div>
                        <div className="input-div flex row justify-between px-6 my-3">
                            <label><input type="checkbox" /> Remember me</label>
                            <p><a href="#">Forgot password?</a></p>
                        </div>
                        <div className='button-div flex justify-center'>
                            <button type='submit' className='rounded-3xl px-2 py-2 w-[calc(100%-2.5rem)]'>Login</button>
                        </div>
                        <div className='register-link-div mt-3 flex justify-center'>
                            <p>Don't have an account? <a href="#" className='font-bold'>Register</a></p>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default AuthPage