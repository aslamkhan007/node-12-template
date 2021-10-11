import React from "react";
import { useState } from "react";
// import "../components/App1.css"
import { Navigation } from "./Navigation";



const validation = values=> {
  
    
    const errors = {};


    if(!values.fullname){
        errors.fullname = "name is required";

    }
     if (!values.email){
        errors.email = "email is required "
    }

      if(!values.password){
        errors.password = "password is required"
    }
    return errors;
};



export  const Product = () => {

    
  const [values, setValue] = useState({
      
    fullname: "",
    email: "",
    password: "",
  });

  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);

    //         console.log(e.target.value)
    //         let name,value;
    //   name = e.target.name;
    //   value=  e.target.value;

    //   setValue({...value,[name]:value})
  };
   const handleFormSubmit = (e) => {
  
    e.preventDefault();

    setErrors(validation(values));
    // console.log( setErrors(validation(values)))
  };
  return (
      <>
      <Navigation/>
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">create account</h2>
        </div>
        <form className="form-wrapper">
          <div className="name">
            <label className="lable">Full Name</label>
            <input
              className="input"
              type="text"
              value={values.fullname}
              onChange={handleChange}
              name="fullname"
            />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
          </div>

          <div className="email">
            <label className="lable">Email</label>
            <input
              className="input"
              type="email"
              value={values.email}
              onChange={handleChange}
              name="email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="password">
            <label className="lable">Password</label>
            <input
              className="input"
              type="password"
              value={values.password}
              onChange={handleChange}
              name="password"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="password">
            <button className="submit" type="submit" onClick={handleFormSubmit}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};


