import React from 'react'
import Navbar from './Navbar'

const Register = () => {
  return (

<div>
    <Navbar />
<div className="container">
    <div className="row">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <div className="row g-2">
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                       <label for="" className="form-label">name</label>
                       <input type="text" className="form-control"/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                       <label for="" className="form-label">rollno</label>
                       <input type="text" className="form-control"/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">admission no</label>
                    <input type="text" className="form-control"/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">mobile number</label>
                    <input type="text" className="form-control"/>
                   </div>
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">college</label>
                    <input type="text" className="form-control"/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">username</label>
                    <input type="text" className="form-control"/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">password</label>
                    <input type="password" name="" id="" className="form-control"/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                       <button className="btn btn-success">REGISTER</button>
                   </div>
                   
               </div>
           </div>
        
    </div>
</div>
</div>
    
  )
}

export default Register