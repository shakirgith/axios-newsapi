import React, { useState } from 'react';

const Myform = () => {
    
  const [userRegistration, setUserRegistration] = useState({
    
                username: "",
                gender: "",
                email: "",
                phone: "",
                city: "",
                tnc: ""
                
               
       
    
        });
    
        const [records, setRecords] = useState([]);

        const handleInput = (e) =>  {
            const name = e.target.name;
            const value = e.target.value;
            console.log(name);
    
            setUserRegistration ({ ...userRegistration, [name]: value });
           
            
    
        }

    
    
        const handleSubmit = (e) => {

            e.preventDefault();
                
            //     const value = e.target.value; 
            //  if this.value = e.target.value(0) {
            //     alert("Please fill the form field.");
            // }
            
            // else {

                
                
           
    
            const RegistrationRecords = { ...userRegistration, id:new Date().getTime().toString()}
            console.log(records);
            setRecords ([ ...records, RegistrationRecords]);
            console.log(records);
    
            setUserRegistration({ username: "", gender: "", email: "", phone: "",   city: "", tnc: ""});
    
           
                
        }   

       
        
    
        // handleSubmit(event) {
        //     alert('A name was submitted: ' + this.state.value);
        //     event.preventDefault();
        //   }




    
    
        return (
            <>
            <div className="container mt-5 mx-auto">
            <div className="row">
            <div className="col-md-6">
    
                    <h4>Registration Form</h4>
    
                    <form action="" autoComplete="off" onSubmit={handleSubmit}>
                        <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" value={userRegistration.username} onChange={handleInput} className="form-control" name="username"  />
                        </div>

                        <div className="mb-3">
                        <label className="form-label">Gender</label>
                            <div className="radiogroup" value={userRegistration.gender} onChange={handleInput}>
                                <div className="d-flex">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gender" value="male" />
                                        <label className="form-check-label">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check ms-1">
                                        <input className="form-check-input" type="radio" name="gender" value="female" />
                                        <label className="form-check-label">
                                        Female
                                        </label>
                                    </div>
                                </div> 
                            </div>

                        </div>

               
                        <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" value={userRegistration.email} onChange={handleInput} className="form-control"  name="email"   />
                        </div>

                       
    
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input type="text" value={userRegistration.phone} onChange={handleInput} className="form-control" name="phone"   />
                    </div>

                    
                    <div className="mb-3">
                        <label className="form-label">City</label>
                        <select className="form-select" name='city' value={userRegistration.city} onChange={handleInput}>
                        <option selected>Select City</option>
                        <option value="jaipur">Jaipur</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        </select>
                        </div>

                    <div className="mb-3">
                         <div className="form-check" value={userRegistration.tnc} onChange={handleInput}>
                        <input className="form-check-input" type="checkbox" name="tnc" value="Term and Conditions" />
                        <label className="form-check-label">
                        Term and Conditions
                        </label>
                        </div>
                    </div>

                   
                    <div className="text-center">
                    <input type="submit" className="btn btn-success btn-primary" name="submit" value="Submit" />
                    </div>
                    </form>
                    </div>
                    
    
    
    
                    <div className="col-md-6">
                        <h4>Record Data</h4>
                        {
                            records.map ((curElem) => {
                                return (
                                    <ul>
                                    <li>{curElem.username}</li>
                                    <li>{curElem.gender}</li>
                                    <li>{curElem.email}</li>
                                    <li>{curElem.phone}</li>
                                    <li>{curElem.city}</li>
                                    <li>{curElem.tnc}</li>
                                    </ul>
                                )
                            })
                        }
                 
                            
    
                        </div>
                        
               </div>
               </div>
            </>
        )
    }
    
    export default Myform;