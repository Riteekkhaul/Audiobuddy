import React,{ useState , useEffect ,useContext} from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { ActivityContext} from '../Context/ActivityContext';

const Navbar = () => {

      const { activities , setActivities } =useContext(ActivityContext);

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
      setActivities([]);
      navigate('/');
  }

  const Home=()=>{
     navigate('/');      
  }
  
  const Help=()=>{
      navigate('/help');      
   }

   const Services=()=>{
      navigate('/services');      
   }
   const About=()=>{
      navigate('/about');      
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
                                 <li onClick={Services}>Services</li>
                                 <li onClick={About}>About</li>
                                 <li onClick={Help} >Help</li>
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


