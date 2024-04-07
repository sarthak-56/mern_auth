import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Main from './Components/Main';


import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/main" element={<Main/>}/>
        
        </Routes>
    </Router>
  );
}

export default App;
