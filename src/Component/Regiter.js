import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register,reset } from '../features/AuthSlice'
import { FaUser } from 'react-icons/fa'
import {  toast } from 'react-toastify';
import { useDispatch,useSelector } from "react-redux";

const Regiter = () => {
  const navigate = useNavigate()
const [nom,setNom]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();
  const {user,isLoading,isSuccess, isError,errorMessage} =useSelector((state) => state.auth);
  useEffect(() => {
    if (isError) {
      toast.error(errorMessage)
    }

    if (isSuccess || user) {
      navigate('/art/listarticlesTable')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, errorMessage, navigate, dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        nom,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }
  return (
    <div className="loginform center" style={{'text-align':'center','padding':30, 'margin-left':400}}>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gestion Commerciale | Registration Page </title>
        {/* Google Font: Source Sans Pro */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css" />
        {/* icheck bootstrap */}
        <link rel="stylesheet" href="../../plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
        {/* Theme style */}
        <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
        <div className="register-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="../../index2.html" className="h1"><b>Register</b></a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Nouvel utilisateur</p>
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Nom utilisateur" 
                  value={nom}
                  onChange={e => setNom(e.target.value)}
                  required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Retype password" 
                  value={password2}
                  onChange={e => setPassword2(e.target.value)}
                  required
                  
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                      <label htmlFor="agreeTerms">
                        I agree to the <a href="#">terms</a>
                      </label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              <div className="social-auth-links text-center">
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2" />
                  Sign up using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2" />
                  Sign up using Google+
                </a>
              </div>
              <a href="login.html" className="text-center">I already have a membership</a>
            </div>
            {/* /.form-box */}
          </div>{/* /.card */}
        </div>
        {/* /.register-box */}
        {/* jQuery */}
        {/* Bootstrap 4 */}
        {/* AdminLTE App */}
      </div>
  )
}

export default Regiter
