import './App.css';
import Home from './Pages/Home/Home';
import Login from './components/Login/Login';
import React, { useState,useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const AuthContext = React.createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  return (
    <AuthContext.Provider value={{ setIsLoggedIn, isLoggedIn }}>

    <BrowserRouter>

    <div className="App">
      <Routes>
            <Route path="/" element={isLoggedIn ?  <Home /> : <Login />} />
            {
            }
            <Route path="/Home" element={isLoggedIn ?  <Home /> : <Login />} />
            <Route path="*" element={isLoggedIn ? <Login /> : <Home />} />

            

            
          </Routes>
      
    </div>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
