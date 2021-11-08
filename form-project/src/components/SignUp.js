import React, { useEffect, useState } from 'react';
import { validate } from './validate';
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { notify } from './toast';

const SignUp = () => {

    const [data,setData] = useState({
        name:"",
        password:"",
        email:"",
        confirmPassword:"",
        isAccepted: false
    }) 

    const[errors,setErrors] = useState({})
    const[touched,setTouched] = useState({})


    useEffect(()=>{
        setErrors(validate(data))
    },[data,touched])

    const changeHandler = e =>{
        if(e.target.naem === "isAccepted"){
            setData({...data,[e.target.name]:e.target.checked})
        }else {
            setData({...data,[e.target.name]:e.target.value})
        }
    }

    const focushandler = e =>{
        setTouched({...touched,[e.target.name]:true})
    }

    const submitHandler =e =>{
        e.preventDefault()
        if(!Object.keys(errors).length){
            notify("You signed in successfully","success")
        }else {
            notify("Invalid data!","error")
            setTouched({
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccepted:true
            })
        }
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <h2>SignUp</h2>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={data.name} onChange={changeHandler} onFocus={focushandler}/>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={data.email} onChange={changeHandler} onFocus={focushandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focushandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={focushandler}/>
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div>
                    <label>I Accept terms of privacy policy</label>
                    <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} onFocus={focushandler}/>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div>
                    <a href="#">Log in</a>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;