import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Import your custom CSS file


const Main = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logout clicked!');
    alert("logout Successfully")
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Welcome to the Social App</h2>
      <p>Explore and engage with your network.</p>


      <div className="row">
        <div className="col-md-8">
      
          <h3>Recent Posts</h3>
        
        </div>

        <div className="col-md-4">
   
          <h3>Upcoming Events</h3>
        
        </div>
      </div>

   
      <Link to="/friends" className="btn btn-outline-primary mt-3 me-3">
        Friends Profile
      </Link>

    
      <button className="btn btn-outline-danger mt-3" onClick={handleLogout}>
        Logout
      </button>

     
    </div>
  );
};

export default Main;
