// import axios from 'axios';
import React from "react";

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './components/home';
import PageNotFound from './components/not-found'
import Welcome from './components/welcome';
import OurTeam from './components/ourteam';
import Myform from './components/form';
// import ShareLayout from '../components/sharelayout';
import Courses from './components/course';
import Search from './components/Search';
import List from './components/list';
import Newsapi from './components/Newsapi';
// import Hotel from './components/hotel';
import ImageGallary from './components/ImageGallary';
import NewEmployee from './components/UseState-Hook';
import Newstv from './components/newstv';
// import Login from './components/authentication/login';
// import Logout from './components/authentication/logout';
// import Profile from './components/profile';
// import Protected from './components/Protected';
import EmployeeComponent from './components/search-added';




function App() { 


//   const [isLoggedIn, setisLoggedIn] = useState(null);
//  const logIn = () => {
//  setisLoggedIn(true);
//  };
//  const logOut = () => {
//  setisLoggedIn(false);
//  };
  


      return ( 
        <> 
        <BrowserRouter>   
          <Header />

          {/* {isLoggedIn ? (
          <button onClick={logOut}>Logout</button>
          ) : (
          <button onClick={logIn}>Login</button>
          )} */}

          <Routes>
          {/* <Route path="/dashboard" element={<ShareLayout />} /> */}
            <Route exact index path="/" element={ <Home />} />
            {/* <Route path="/protected" element={<Protected />}>
              </Route> */}
            <Route path="/courses" element={<Courses />}>
              <Route path="search" element={<Search />} />
              <Route path="list" element={<List/>}/>
            </Route>

        

            {/* <Route path="/profile" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Profile />
            </ProtectedRoute>
            }>
            </Route> */}

        {/* <Route path="/logout" element={<Logout />} />

          <Route path="/login" 
            render={props=>(
            <Login {... props} />
            )}>
          </Route>
           
            <Protected path="/profile" element={<Profile />} /> */}

       

            {/* <Route  path="/authentication/login" element={<Login />} /> */}
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/newsapi" element={<Newsapi />} />
            <Route path="/newstv" element={<Newstv />} />
            {/* <Route path="/hotel" element={<Hotel />} /> */}
            <Route path="/imagegallery" element={<ImageGallary />} />
            <Route path="/newemployee" element={<NewEmployee />} />
            <Route path="/search-added" element={<EmployeeComponent />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/form" element={<Myform />} />
            <Route path="*" element={<PageNotFound />} />

            
          </Routes>
    </BrowserRouter>

      
     
      <Footer />
    {/* </Router> */}

        {/* <Welcome />
        <OurTeam /> */}

        
          
          {/* <Car />
          
          <Data />  */}
            {/* <Myform /> */}
          {/* <MyEmployee />    */}
          {/* <Myaap /> */}
          


        </> 

      ); 
    } 

  
  export default App; 