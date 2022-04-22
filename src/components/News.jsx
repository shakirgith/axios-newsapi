import React from 'react';


const MyNews = ({news}) => {

  
    return (
        <div className="container">
        <h2>Latest News API</h2>

        <div className="row">

        {
                news.map((value) => (
                //const { date, title, url, image, desc, author, id, name, cont  } = curElem;

                    <div className='col-12 col-md-4 col-lg-3 mb-4' key={value.source.id}>  
                    <div className="card-group">
                      <div className="card" >
                        <img className='img-fluid' src={value.urlToImage} alt='Image' />

                        <div className="card-body">
                            <div className='d-flex justify-content-between mb-2'>
                            <small>{value.publishedAt}</small>   <small>{value.source.name}</small> 
                            </div>
                      
                          <h5 className="card-title">{value.title}</h5>   
                        
                          <p className="card-text">{value.description}</p>
                           <a className="btn btn-secondary btn-sm" target="_blank" href={value.url}>Read More </a>
                        </div>
                      <div className="card-footer">
                        <small className="text-muted"><strong>Author</strong> {value.author}</small>
                      </div>
                    </div>      
                    </div>
                    </div>



                   


            
            
            ))
        }           
            
            
           </div>
       </div>
    )

 }
export default MyNews;