import React, { useEffect,useState } from 'react';




const OurTeam = () => {

  const Menu = [

    {
        id: 1,
        image: "/images/main-slider1.jpeg",
        names: "arjun saini",
        company: "taggbox",  
        age: "32",
        overview: "Arjun Saini this is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
        id: 2,
        image: "/images/carousel2.jpg",
        names: "shakir ansari",
        company: "webcontxt",  
        age: "25",
        overview: "Shakir Ansari this is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
        id: 3,
        image: "/images/webss.webp",
        names: "mukul sharma",
        company: "dreamcast",  
        age: "28",
        overview: "Mukul Sharma this is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
        id: 4,
        image: "/images/destination1.jpeg",
        names: "amit nagar",
        company: "eventbot",  
        age: "29",
        overview: "Amit Nagar this is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },

];


  const[items, setItems] =  useState(Menu);
 
    const filterItem = (nameItem) => {
        const updatedItems = Menu.filter( (curElem) => {
        return curElem.company === nameItem;
 
        });
        setItems(updatedItems);


        // useEffect(() => {
        //   localStorage.setItem('items', JSON.stringify(filterItem));
        // }, [items]);

    }





 

   

  return (
    <div>
     
        <div className='container text-center'>
            <div className='row'>
              {
                items.map((elem) => {
                    const { id, names, image, company, overview, age } = elem;
                    
                    return ( 
                      <div className='col-4 mx-auto'>  
                    <div className="card-group">
                      <div className="card">
                        <img className='img-fluid' src={image} alt='Image' />
                        <div className="card-body">
                          <h4 className="card-title">{ names }</h4>
                          <h6 className="card-title">Age: { age }</h6>
                          <p className="card-text">{ overview }</p>
                        </div>
                      <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                      </div>
                    </div>
                    </div>
                    </div>
                    )
                })      
              }
                
            <div className='row mt-5'>
                <div className='col-8 py-4 mx-auto'>
                    <button class="btn btn-primary m-2" onClick={() => filterItem('eventbot')}>Show Amit</button>
                    <button class="btn btn-primary m-2" onClick={() => filterItem('taggbox')}>Show Arjun</button>
                    <button class="btn btn-primary m-2" onClick={() => filterItem('dreamcast')}>Show Mukul</button>
                    <button class="btn btn-primary m-2" onClick={() => filterItem('webcontxt')}>Show Shakir</button>
                </div>
                
            </div>
        </div>
              

        </div>

    </div>
  );
 }
export default OurTeam;