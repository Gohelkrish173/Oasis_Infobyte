import React, { useState, useEffect } from "react";
import { Link, json, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [data, setData] = useState({ UserName: "", Password: "" });
    const navi = useNavigate();

    const handelLogin = async (e) => {
        e.preventDefault();

        const responce = await fetch("http://localhost:5000/Login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const j = await responce.json();
        if (responce.ok) {
            console.log(j.dt);
            localStorage.setItem('uname', j.dt.UName);
            navi('/Home');
        }
    };

    return (
        <>
            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                            <div class="card mb-3">

                                <div class="card-body">

                                    <div class="pt-4 pb-2">
                                        <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                        <p class="text-center small">Enter your username & password to login</p>
                                    </div>

                                    <form class="row g-3 needs-validation">

                                        <div class="col-12">
                                            <label class="form-label">Username</label>
                                            <div class="input-group has-validation">
                                                {/* <span class="input-group-text" id="inputGroupPrepend"></span> */}
                                                <input type="text" class="form-control" id="yourUsername" onChange={(e) => {
                                                    setData({ ...data, UserName: e.target.value });
                                                }} />
                                                <span asp-validation-for="UserName" class="text-danger"></span>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourPassword" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="yourPassword" onChange={(e) => {
                                                setData({ ...data, Password: e.target.value })
                                            }} />
                                            <span asp-validation-for="Password" class="text-danger"></span>
                                        </div>

                                        {/* <div class="col-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                            <label class="form-check-label" for="rememberMe">Remember me</label>

                                        </div>
                                    </div> */}
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100" type="submit" onClick={handelLogin}
                                            >Login</button>
                                        </div>
                                        <div class="col-12">
                                            <p class="small mb-0">Don't have account?
                                                <Link to="/Registor"><h6>Create an account</h6></Link>
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

export default LoginPage;