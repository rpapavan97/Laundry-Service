import Footer from "../Footer";
import Copyright from "../Copyright";
import "./login.css";
import { setToken } from "../../utils/authOperation";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../Header";


export default function Login(){
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const signin = async e => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/api/v1/user/login", {
            method: 'POST',
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
            })
          });
          const data = await response.json();
          if(data.status==="failed"){
              setMessage(data.message);
          }else{
                const token = data.token;
                setToken(token);
                navigate("orders")
          }
        } catch (e) {
            console.log(e);
            setMessage("Invalid User")
        }
    }
    return(
        <>
            <Header/>
            <div className="title">
                <div className="left">
                    <p className="company">Laundry</p>
                    <p className="company">Service</p>
                    <p className="caption_left">Doorstep Wash & Dryclean Service</p>
                    <p className="tag">Don’t Have An Account?</p>
                    <Link to="/register">
                        <button className="register_btn">Register</button>
                    </Link>
                </div>
                <div className="right">
                    <p className="signin">SIGN IN</p>
                    <form  className="login_form" id="login" onSubmit={e => signin(e)}>
                        <p className="form_label">Mobile / Email</p>
                        <input type="text" id="email" name="email"/>
                        <p className="form_label">Password</p>
                        <input type="password" id="password" name="password" maxLength="16" />
                        <p className="invalid">{message}</p>
                        <button className="signin_btn" type="submit">Sign In</button>
                    </form>
                </div>
            </div>
            <Footer/>
            <Copyright/>
        </>  
    )
}