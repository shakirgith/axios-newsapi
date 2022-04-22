import React from "react";
import ReactDOM from "react-dom";
import Example from '../components/counter';



const myStyle = {
  backgroundColor: "blue",
  color: "white",
};




class Car extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
          brand: "Ford",
          model: "Mustang",
          color: "red",
          year: 1964  
        };

      
        
      }

    

    

      brandChange = () => {
        this.setState({brand: "Maruti"})
      }
      modelChange = () => {
        this.setState({model: "Marcedies"})
      }
      colorChange = () => {
        this.setState({color: "blue"})
      }
      yearChange = () => {
        this.setState({year: "2021"})
      }
     

      
      
     

      
  render() {
    return (
      <>
       <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}  {this.state.model} from {this.state.year}.
        </p>
        <button style={{color: "red"}} type="button" onClick={this.brandChange}> Brand Change </button>
        <button style={myStyle} type="button" onClick={this.colorChange}> color Change </button>
        <button type="button" onClick={this.modelChange}> model Change </button>
        <button type="button" onClick={this.yearChange}> year Change </button>
        <Example />
          {/* <Example>
        <button onClick={() => setCount(count + 1)}>Plus</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>  
      </Example>  */}

      

{/* 
        <div className="">
        <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '300%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '-15%',
    }}>
      Counter App
      <div style={{
        fontSize: '120%',
        position: 'relative',
        top: '10vh',
      }}>
        {counter}
      </div>
      <div className="buttons">
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginRight: '5px',
          backgroundColor: 'green',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={handleClick1}>Increment</button>
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          backgroundColor: 'red',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={handleClick2}>Decrement</button>
      </div>
    </div>
        </div> */}
        
      </>
    );
  } 
}


export default Car;

