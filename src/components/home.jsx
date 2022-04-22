import React, { useState, useEffect } from "react";
import axios from 'axios';


// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getAllposts } from "../../store/Actions/TestActions";
// import Users from "../components/Users";





const Home = () => {
        // const dispatch = useDispatch();
      
        // useEffect(() => {
        // dispatch(getAllposts());
        // }, []);

        // const handleLogout = () => {
        //     localstorage.clear();
        //     window.location.pathname =
        //     "/components/authentication/login";



        



    
            const [user, setUser] = useState([]);

                const loadUsers =  async  () => {
                const result = await  axios.get("http://localhost/ReactApi/view.php");
                setUser(result.data.phpresult);
                console.log(result.data.phpresult);

                };

         useEffect(() => {
            loadUsers();
        }, []);

 
        

       
            // toggle on click hide/show
            const [toggle, setToggle] = useState(true)



        

    return (
        
        <main id="main">
        <section id="notfound" className="notfound">


        <div className="container">


        <div className="text-center">
                <h1>Welcome to Our Homepage</h1>
                <p>MySQL Database</p>
            </div>
        

            { 
                toggle? 
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Password</th>
                    </tr>
                </thead>
    
                <tbody> 
                    {user.map((res) => 
                    <tr>
                    <th scope="row">{res.username}</th>
                    <td>{res.email}</td>
                    <td>{res.phone}</td>
                    <td>{res.password}</td>
                    </tr>   
    
                     )}
    
    
    
                </tbody>
                </table> : null
            }







<       div className="text-center">
            {/* <button className="btn btn-primary m-3"
            onClick={()=> setToggle(false)}>
            Hide
            </button>
            <button className="btn btn-primary m-3"
            onClick={()=> setToggle(true)}>
            Show
            </button> */}


            <button className="btn btn-primary m-3" onClick={()=> setToggle(!toggle)}> 

            {/* on click change icon by toggle */}
            {!toggle
                ? <i className="fa fa-times"></i>
                : <i className="fa fa-bars"></i>
                }
                
            &nbsp;  
            Table</button>
           {/* <Users /> */}
           </div>
        </div>
        </section>
        </main>
    );
}

export default Home;