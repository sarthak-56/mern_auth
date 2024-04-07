// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    console.log('Button clicked!');
    navigate(route);
  };

  return (
    <div className="container mt-5 text-center">
    <h2 className="mb-4">Welcome to the Social App</h2>

    <p className="lead">
      Connect with friends, share your thoughts, and stay updated with the latest happenings.
    </p>

    <div className="d-flex justify-content-center mt-4">
      <Link to="/login" className="btn btn-outline-success">
        Login
      </Link>
    </div>

    <div className="mt-5">
      <h3>Features</h3>
      <p>
        Explore the features of our social app:
      </p>
      <ul className="list-group list-group-flush text-start">
        <li className="list-group-item">Create and customize your profile</li>
        <li className="list-group-item">Connect with friends and colleagues</li>
        <li className="list-group-item">Share updates, photos, and videos</li>
        <li className="list-group-item">Discover trending topics and communities</li>
        {/* Add more features as needed */}
      </ul>
    </div>

    <div className="mt-5">
      <h3>Get Started</h3>
      <p>
        Join our social network now and experience a new way of connecting with the world.
      </p>
      <Link to="/signup" className="btn btn-outline-primary">
        Create an account
      </Link>
    </div>
  </div>
  );
};

export default Home;
