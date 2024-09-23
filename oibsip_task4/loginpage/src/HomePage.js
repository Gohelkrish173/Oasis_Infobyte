import React, { useEffect, useState } from "react";
import './index.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navi = useNavigate();
  const [d,setD] = useState({});

  useEffect(()=>{
    fetch("http://localhost:5000/Data/"+localStorage.getItem('uname'))
    .then((res)=>res.json())
    .then((res)=>{setD(res);});
  },[]);

  return (
    <>
      <div className="x d-flex justify-content-center align-items-center">
        <div class="card">
          <img src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg" alt="John" style={{"width":"100%"}}/>
            <h1>{d.UserName}</h1>
            {/* <p class="title">CEO & Founder, Example</p> */}
            <p>{d.Email}</p>
            <p><button onClick={(e)=>{
              e.preventDefault();

              fetch('http://localhost:5000/Logout')
              .then((res)=>{
                console.log(res);
                localStorage.removeItem('uname');
                navi('/')
              })
            }}>Log-Out</button></p>
        </div>
      </div>
    </>
  );
}

export default Home;