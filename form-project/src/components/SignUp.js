import React, { useState } from 'react';

const SignUp = () => {

    const [data,setData] = useState({
        name:"",
        password:"",
        email:"",
        confirmPassword:"",
        isAccepted: false
    }) 

    const changeHandler = e =>{
        if(e.target.naem === "isAccepted"){
            setData({...data,[e.target.name]:e.target.checked})
        }else {
            setData({...data,[e.target.name]:e.target.value})
        }
    }

    return (
        <div>
            <form>
                <h2>SignUp</h2>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={data.name} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={data.email} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={data.password} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler}/>
                </div>
                <div>
                    <label>I Accept terms of privacy policy</label>
                    <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler}/>
                </div>
                <div>
                    <a href="#">Log in</a>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;