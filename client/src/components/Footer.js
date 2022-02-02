import "./index.css"

export default function Footer(){
    return (
        <div style={{borderTop:"2px solid #5861AE"}}>
            <div style={{backgroundColor: "#F8F9FF", marginTop:"5px"}}>
                <h3 className="footer">Now Refer & Earn ₹500 for every referral*</h3>
                <p className="footer_top">* Terms and conditions will be applied</p>
            </div>
            <div className="footer_contact">
                <div>
                    <h4>ABOUT US</h4>
                    <p className="footer_p">Doorstep Wash & Dryclean Service</p>
                </div>
                <div>
                    <h4>Home</h4>
                    <p className="footer_p">Sign in</p>
                    <p className="footer_p">Register</p>
                </div>
                <h4>Pricing</h4>
                <div>
                    <h4>Career</h4>
                    <p className="footer_p">Blogs</p>
                    <p className="footer_p">Create</p>
                </div>
                <h4>Contact</h4>
                <div>
                    <h4>SOCIAL MEDIA</h4>
                    <p className="footer_p">icons</p>
                </div>
            </div>
        </div>
    )
}