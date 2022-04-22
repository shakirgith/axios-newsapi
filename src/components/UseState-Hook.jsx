import ReactDOM from "react-dom";
import React, { Component, useState } from "react";




function NewEmployee(){
  const [employee,setEmployeeData]=useState({Id:'',Name:'',Location:'',Salary:''});  
  
  function changeEmployeeInfo(e){
    setEmployeeData({...employee,[e.target.name]:e.target.value});
  }
  return(
    <div className="container text-center">
      <h2>Welcome to Employee Component... ( UseState Hook )</h2>
      <p>
        <label>Employee ID :
                <input type="text" name="Id" value={employee.Id}
                onChange={changeEmployeeInfo}></input>
        </label>
      </p>
      <p>
        <label>Employee Name : 
                <input type="text" name="Name" value={employee.Name} 
                onChange={changeEmployeeInfo}></input>
        </label>
      </p>
      <p>
        <label>Employee Location :
                <input type="text" name="Location" value={employee.Location}
                onChange={changeEmployeeInfo}></input>
        </label>
      </p>
      <p>
        <label>Employee Salary : 
                <input type="text" name="Salary" value={employee.Salary}
                onChange={changeEmployeeInfo}></input>
        </label>
      </p>
      <p>
        Employee ID is :<b>{employee.Id}</b> <br /> Name is : <b>{employee.Name}</b> <br />
         Location is : <b>{employee.Location}</b> <br /> and Salary is : <b>{employee.Salary}</b>
      </p>
      <div salary={employee.Salary} onSalaryChange={changeEmployeeInfo}></div>
    </div>
  )
}


export default NewEmployee;