import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { login, reset } from "../features/AuthSlice";




const Login = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user } = useSelector((state) => state.auth);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  useEffect(() => {
    if(isLoggedIn)
   {
    dispatch(reset());
   
   }
  }, [dispatch, isLoggedIn])

    const handleSubmit=(event)=>{
        event.preventDefault();
        const objetuser  = {
            email: email,
            password :password
                   }; 
            dispatch(login(objetuser)) ;
        };

         if(isLoggedIn){ 
               
          localStorage.setItem("CC_Token", JSON.stringify(user.accessToken));
        
        
                                           
                navigate("/");     
            }
    
        

  return (
  
       <div className="loginform center" style={{'textAlign':'center','padding':30, 'marginLeft':400}}>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Sign In</title>
          {/* Google Font: Source Sans Pro */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
          {/* Font Awesome */}
          <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css" />
          {/* icheck bootstrap */}
          <link rel="stylesheet" href="../../plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
          {/* Theme style */}
          <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
          <div className="login-box">
            {/* /.login-logo */}
            <div className="card card-outline card-primary">
              <div className="card-header text-center">
                <a href="../../index2.html" className="h1">Sign In</a>
              </div>
              <div className="card-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <form action="../../index3.html" method="post">
                  <div className="input-group mb-3">
                    <input type="email" 
                    className="form-control" 
                    placeholder="Email" 
                    onChange={(event)=>setEmail(event.target.value)}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    onChange={(event)=>setPassword(event.target.value)}
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
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">
                          Remember Me
                        </label>
                      </div>
                    </div>
                    {/* /.col */}
                    <div className="col-4">
                    <div>
                      <button onClick={(event)=>handleSubmit(event)}>Sign In</button>
                    </div>
                    </div>
                    {/* /.col */}
                  </div>
                </form>
                <div className="social-auth-links text-center mt-2 mb-3">
                  <a  className="btn btn-block btn-primary">
                    <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                  </a>
                  <a  className="btn btn-block btn-danger">
                    <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                  </a>
                </div>
                {/* /.social-auth-links */}
                <p className="mb-1">
                  <a href="forgot-password.html">I forgot my password</a>
                </p>
                <p className="mb-0">
                  <a href="register.html" className="text-center">Register a new membership</a>
                </p>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/* /.login-box */}
          {/* jQuery */}
          {/* Bootstrap 4 */}
          {/* AdminLTE App */}
        </div>
      );
  
}

export default Login
