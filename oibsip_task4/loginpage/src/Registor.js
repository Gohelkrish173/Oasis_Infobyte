import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registor = () => {
  const [data, setData] = useState({ UserName: "", Password: "", Email: "" });
  const navi = useNavigate();

  const handelLogin = async (e) => {
    e.preventDefault();

    const responce = await fetch("http://localhost:5000/Registor", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (responce.ok) {
      navi('/');
    }
  };
  return (
    <>
      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              {/* <div class="d-flex justify-content-center py-4">
                            <a class="logo d-flex align-items-center w-auto">
                                <img src="~/img/logo.png" alt="">
                                <span class="d-none d-lg-block">NiceAdmin</span>
                            </a>
                        </div> */}

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
                    <p class="text-center small">Enter your personal details to create account</p>
                  </div>

                  <form class="row g-3 needs-validation" asp-controller="User" asp-action="UserRegister" novalidate>
                    <div class="col-12">
                      <label for="yourName" class="form-label">UserName</label>
                      <input type="text" asp-for="UserName" class="form-control" id="yourName" onChange={(e)=>{
                        setData({...data,UserName:e.target.value});
                      }} />
                      <span class="text-danger" asp-validation-for="UserName"></span>
                    </div>

                    <div class="col-12">
                      <label for="yourEmail" class="form-label">Password</label>
                      <input type="password" asp-for="Password" class="form-control" id="yourEmail" onChange={(e)=>{
                        setData({...data,Password:e.target.value})
                      }} />
                      <span class="text-danger" asp-validation-for="Password"></span>
                    </div>

                    <div class="col-12">
                      <label for="yourEmail" class="form-label">Email</label>
                      <input type="email" asp-for="Email" class="form-control" id="yourEmail" onChange={(e)=>{
                        setData({...data,Email:e.target.value});
                      }} />
                      <span class="text-danger" asp-validation-for="Email"></span>
                    </div>

                    {/* <div class="col-12">
                                        <label for="yourEmail" class="form-label">Mobile Number</label>
                                        <input type="number" asp-for="MobileNo" class="form-control" id="yourEmail"/>
                                        <span class="text-danger" asp-validation-for="MobileNo"></span>
                                    </div> */}

                    {/* <div class="col-12">
                                        <label for="yourEmail" class="form-label">Address</label>
                                        <input type="text" asp-for="Address" class="form-control" id="yourEmail"/>
                                        <span class="text-danger" asp-validation-for="Address"></span>
                                    </div> */}

                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                        <label class="form-check-label" for="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                        <div class="invalid-feedback">You must agree before submitting.</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit" onClick={handelLogin}>Submit</button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">Already have an account? 
                        <Link to="/"><h6>Login</h6></Link>
                      </p>
                    </div>
                  </form>

                </div>
              </div>


            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Registor;