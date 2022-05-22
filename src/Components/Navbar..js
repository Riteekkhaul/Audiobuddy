import React,{ useState , useEffect} from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {


      useEffect(() => {
         if(localStorage.getItem('NewUser')){
               setNotLoggedin(false);
         }
      }, []);
      

  const [notLoggedin, setNotLoggedin] = useState(true);
  const navigate = useNavigate();

  const Register=()=>{
      navigate('/register');
  }
  const Login =()=>{
      navigate('/login');
  }

  const Logout=()=>{
      localStorage.clear();
      alert("Logged Out Successfully!")
      setNotLoggedin(true);
      navigate('/');
  }

  const Home=()=>{
     navigate('/');      
  }

  const handleProfile =()=>{
        console.log("called");
        navigate('/profile');
  }

      return (
            <div className='navbar-container'>
                  <div className='nav-con' >
                        <div className='nav-left'>
                              <img src='logo3.png' alt='logo'/>
                              <h2 onClick={Home}> AudioBuddy </h2> 
                             <img src='logo1.webp' alt='logo' />
                        </div>
                        <div className='nav-right'>
                              <ul>
                                 <li>Services</li>
                                 <li>About</li>
                                 <li >Help</li>
                             {
                                   notLoggedin?(
                                         <>
                                         <li onClick={Register}>SignUp</li>
                                         <li onClick={Login }>Login</li>
                                         </>
                                    ):(
                                         <>
                                          <li onClick={handleProfile}>Profile</li>
                                          <li onClick={Logout}>Logout</li>
                                         </>
                                     )
                             }   
                              </ul>
                        </div>
                  </div>
            </div>
      )
}

export default Navbar;


