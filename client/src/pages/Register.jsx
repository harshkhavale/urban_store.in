import React from "react";
import { bg1, logo, bag, ind, usa, jap } from "../assets";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="registerpage flex justify-center items-center gap-8">
      <div className="card  flex flex-col  gap-4 ">
        <div
          className="logo my-8 text-4xl rounded-lg px-4 py-1 font-bold flex justify-center items-center"
          style={{ fontFamily: "'Happy Monkey', cursive" }}
        >
          <p>URBAN-ST</p>
          <img src={bag} className="w-8 " alt="" />
          <p>RE.in</p>
        </div>

<div className=" flex p-8 m-4 justify-center items-center flex-col shadow-lg  border border-slate-200 rounded-lg">
<p className=" text-start text-xl mb-8">Create an Account</p>
        <div className="  flex flex-col justify-center items-center gap-4">
          <div className="flex gap-4 w-full">
            <input
              type="text"
              className=" border w-full border-slate-300 p-2 rounded-md"
              placeholder="firstname and lastname"
            />
          </div>
          <div className="flex gap-4 w-full">
            <input
              type="email"
              className="border w-full border-slate-300 p-2  rounded-md"
              placeholder="email"
            />
          </div>
          <div className="flex gap-4 w-full">
            <select name="country" className="p-2" id="country">
              <option>IND +91</option>
              <option>JAP+89</option>
              <option>USA +66</option>
            </select>
            <input
              type="number"
              className="border w-full border-slate-300 p-2 rounded-md"
              placeholder="mobile number"
            />
          </div>
          <div className="flex gap-4 w-full">
            <input
              type="password"
              className="border w-full border-slate-300 p-2 rounded-md"
              placeholder="password"
            />
          </div>
          <div className="flex gap-4 w-full">
            <input
              type="password" 
              className="border w-full border-slate-300 p-2 rounded-md"
              placeholder="confirm password"
            />
          </div>
          <div className="btn">
            <button type="button" className="bg-transparent border border-slate-300 px-2 rounded-sm py-2 hover:bg-black hover:text-white hover:rounded-sm ">
              sign up
            </button>
          </div>
          <div className=" w-full h-[1px] bg-slate-300"/>
          <div className="login">
            <Link to="/login">Already have an account? Sign in</Link>
          </div>
        
        </div>
        <div className="desc text-xs ">
          <p>

            By creating an account, I consent to the processing of my personal data in accordance with the    <strong>Privacy Policy</strong>.      </p>
 
          </div>
</div>
       
      </div>
    </div>
  );
};

export default Register;
