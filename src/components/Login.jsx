import React from 'react'
import "./Login.css"

function Login() {
    return (
        <div className='container col-sm-6 col-md-5 py-2  bg-light LoginBox ' style={{ zIndex: "-1" }} >
            <form>
                <div className="mb-3">
                    <label for="loginEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="loginPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="loginPassword" required />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Login
