
import React from 'react';
import {BrowserRouter, Routes, Route, Link, NavLink,  Navigate, useParams, Outlet } from 'react-router-dom';





const Header = () => {


    return (    
      
    
        <header className='header'>
            <div className="container">
                <nav className='navbar navbar-light'>
                
                    <ul className='navbar-nav'>
                        <li className='nav-item'><NavLink exact activeClassName="active" to='/'>Home</NavLink></li>
                        <li className='nav-item'><NavLink exact activeClassName="active" to="/welcome">Welcome</NavLink></li>
                        <li className='nav-item'><NavLink exact activeClassName="active" to="/newsapi">News</NavLink></li>
                        <li className='nav-item'><NavLink exact activeClassName="active" to="/newstv">News TV</NavLink></li>
                        <li className='nav-item'><NavLink exact activeClassName="active" to="/hotel">Hotel</NavLink></li>
                        <li className='nav-item'><NavLink exact activeClassName="active" to="/imagegallery">Gallery</NavLink></li>
                        <li className='nav-item'><NavLink exact activeClassName="active" to="/courses">Course</NavLink></li>
                        <li className='nav-item'><NavLink exact activeClassName="active" to="/ourteam">Our Team</NavLink></li>
                        <li className='nav-item'><NavLink exact activeClassName="active" to='/newemployee'>UseState Hook</NavLink></li>
                        <li className='nav-item'><NavLink exact activeClassName="active" to='/search-added'>Search and Added</NavLink></li>
                        <li className='nav-item'><NavLink exact activeClassName="active" to='/form'>Form</NavLink></li>


                        
                        {
                            localStorage.getItem('login') ?
                        <li className='nav-item'><NavLink exact activeClassName="active" to='/authentication/login'>Login</NavLink></li>
                        :
                        <li className='nav-item'><NavLink exact activeClassName="active" to='/authentication/logout'>Logout</NavLink></li>
}
                        <li className='nav-item'><NavLink exact activeClassName="active" to='/profile'>Profile</NavLink></li>
                    </ul>   
                    
                </nav>
            </div>
        </header>
       

    )
  }


export default Header;