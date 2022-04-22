import React, { useState } from "react";
// import React, { Component } from 'react';



// const data = [
//     {
//       id: "1",
//       key: "1",
//       title: "Mukul Sharma",
//       text: "Text1.",
//       img: "../assets/images/main-slider1.jpeg"
//     },
//     {
//       id: "2",
//       key: "2",
//       title: "Arjun Saini",
//       text: "Text2.",
//       img: "../assets/images/main-slider1.jpeg"
//     },
//     {
//       id: "3",
//       key: "3",
//       title: "Shakir Ansari",
//       text: "Text3.",
//       img: "../assets/images/main-slider1.jpeg"
//     },
//     {
//       id: "4",
//       key: "4",
//       title: "Amit Nagar",
//       text: "Text4",
//       img: "../assets/images/main-slider1.jpeg"
//     }
//   ];



//   export default function Myaap() {
//     const [toggle, setToggle] = useState();
//     const [visible, setVisible] = useState(true);



//   return (
//     <div>
//     {data.map(({ title, text, key, img }) => {  
//         return (
//           <>
//             <div className="main">
//               <div className="text">
//                 <h1
//                   onClick={() => {
//                     setToggle(key);
//                     setVisible(false);
//                   }}
//                 >
//                   {title}{" "}
//                 </h1>
//                 {toggle === key ? (
//                   <>
//                     <p>{text}</p>
//                   </>
//                 ) : null}
//               </div>

//               <div className="img">
//                 {visible && key === "1" ? (
//                   <img src={img} key={key} className="img-fluid" />
//                 ) : null}
//                 {toggle === key ? (
//                   <>
//                     <img src={img} key={key} className="img-fluid" />
//                   </>
//                 ) : null}
//               </div>
//             </div>
//           </>
//         );
//       })}
//       </div>
//   );
// }








const data = [
  {
    id: "1",
    key: "1",
    title: "Mukul Sharma",
    text: "mukul subtitle.",
    img: " ../assets/images/main-slider1.jpeg"
  },
  {
    id: "2",
    key: "2",
    title: "Shakir Ansari",
    text: "shakir subtitle.",
    img: "../img/estination1.jpeg"
  },
  {
    id: "3",
    key: "3",
    title: "Arjun Naggar",
    text: "arjun subtitle.",
    img: "myimage/carousel2.jpg"
  },
  {
    id: "4",
    key: "4",
    title: "Arjun Saini",
    text: "arjun subtitle",
    img: "main-slider1.jpeg"
  }
];

export default function Myaap() {
  const [toggle, setToggle] = useState();
  const [visible, setVisible] = useState(true);

  return (
    <div>
      {data.map(({ title, text, key, img }) => {
        return (
          <>
             <div className='container text-center'>
                <div className='showimage'>
                <h1 className='text-center'
                  onClick={() => {
                    setToggle(key);
                    setVisible(false);
                  }}
                >
                  {title}{" "}
                </h1>
                {toggle === key ? (
                  <>
                    <p>{text}</p>
                  </>
                ) : null}

              <div className="img">
                {visible && key === "1" ? (
                  <img src={img} key={key} className="img-fluid" />
                ) : null}
                {toggle === key ? (
                  <>
                    <img src={img} key={key} className="img-fluid" />
                  </>
                ) : null}
              </div>
              </div>

              {/* <div className='row mt-5'>

              <div className='col-4 border py-4'>
                  <h4>Amit Nagar</h4>
                  <button class="btn btn-primary" onClick={[this.updateContent3]} value={this.state.value}>Show Images</button>
              </div>
              <div className='col-4 border py-4'>
                  <h4>Arjun Saini</h4>
                  <button class="btn btn-primary" onClick={this.updateContent} value={this.state.value}>Show Images</button>
              </div>
              <div className='col-4 border py-4'>
                  <h4>Mukul Sharma</h4>
                  <button class="btn btn-primary" onClick={this.updateContent2} value={this.state.value}>Show Images</button>
              </div>

              </div> */}

             
            </div>
          </>
        );
      })}
    </div>
  );
}
