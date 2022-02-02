import { Link } from "react-router-dom";
import Copyright from "../Copyright";
import Footer from "../Footer";
import Header from "../Header";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register(){
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/api/v1/user/register", {
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
                password: e.target.password.value,
                name: e.target.name.value,
                phone: e.target.phone.value,
                state: e.target.state.value,
                district: e.target.district.value,
                address: e.target.address.value,
                pincode: e.target.pincode.value
            })
          });
          const data = await response.json();
          console.log(data)
          if(data.status==="failed"){
              setMessage("Registration unsuccessful, please check the data again.");
            console.log(data)
          }else{
                alert("Registration Successful!")
                navigate("/")
          }
        } catch (e) {
            console.log(e);
            setMessage("Registration unsuccessful, please check the data again.");
        }
    }

    return(
        <div>
            <Header/>
            <div className="register">
                <div className="register_left">
                        <p className="register_company">Laundry Service</p>
                        <p className="register_caption_left">Doorstep Wash & Dryclean Service</p>
                        <p className="register_tag">Already Have Account</p>
                        <Link to="/">
                        <button className="signin_btn">Sign In</button>
                        </Link>
                    </div>
                <div className="register_right">
                    <p className="register_p">Register</p>
                    <form className="register_form" id="register" onSubmit={e=>registerUser(e)}>
                        <div className="register_form1">
                            <p className="form_label">Name</p>
                            <input id="name" type="text" />
                            <p className="form_label">Phone</p>
                            <input id="phone" type="number" maxLength="10" />
                            <p className="form_label">District</p>
                            <input id="district" type="text" />
                            <p className="form_label">Pincode</p>
                            <input id="pincode" type="number" />
                        </div>
                        <div className="register_form2">
                            <p className="form_label">Email</p>
                            <input id="email" type="text" />
                            <p className="form_label">State</p>
                            <input id="state" type="text" />
                            <p className="form_label">Address</p>
                            <input id="address" type="text" />
                            <p className="form_label">Password</p>
                            <input id="password" type="password" />
                        </div>
                        <button type="submit" style={{marginLeft:"47%"}} className="register_btn">Register</button>
                    </form>
                    <p className="invalid">{message}</p>
                </div>
            </div>
            <Footer/>
            <Copyright/>
        </div>
    )
}