import React from 'react'

function Register() {
    return (
        <div className='container col-sm-6 col-md-5 py-2  bg-light LoginBox ' style={{ zIndex: "-1" }} >
            <form >
                <div className="mb-3">
                    <label for="registerEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="registerEmail" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="registerPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="registerPassword" required />
                </div>
                <label for="gender" className="form-label">Chose your gender</label>
                <select id='gender' className="form-select mb-3" aria-label="Default select example" required>

                    <option value="1">Woman</option>
                    <option value="2">Man</option>

                </select>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="registerCheck" required />
                    <label className="form-check-label" for="registerCheck">User agreement</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Register
