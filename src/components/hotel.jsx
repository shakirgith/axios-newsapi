import React from "react";
import axios from "axios";


// const options = {
//     method: 'GET',
//     url: 'https://hotels4.p.rapidapi.com/properties/list',
//     params: {
//       destinationId: '1506246',
//       pageNumber: '1',
//       pageSize: '25',
//       checkIn: '2020-01-08',
//       checkOut: '2020-01-15',
//       adults1: '1',
//       sortOrder: 'PRICE',
//       locale: 'en_US',
//       currency: 'USD'
//     },
//     headers: {
//       'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
//       'X-RapidAPI-Key': '5661a37ed2msh75ecd80df53735bp1441a3jsnf81b386f571f'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });



  class Hotel extends React.Component {

// function hotel() {

    state = {
      articles: [],
      isLoading: true,
      errors: null
    };
  
    getArticles = () => {
      axios
        .get(
        //   "https://newsapi.org/v2/top-headlines?country=in&apiKey=e901d5b623f848939ad3692073bfd152"
          "https://hotels4.p.rapidapi.com/properties/list"
        )
        .then(response => {
          return response.data.articles.map(article => ({ 
            date: `${article.publishedAt}`,
            title: `${article.title}`,
            url: `${article.url}`,
            img: `${article.urlToImage}`,
            desc: `${article.description}`,
            author: `${article.author}`,
          }));
        })
        .then(articles => {
          this.setState({
            articles,
            isLoading: false
          });
        })
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
  
    componentDidMount() {
      this.getArticles();
  
    }

    
  
    // handleClick() {
    //   window.location.href="url";
    // }
    //  handleClick = (url) => () => {
    //   window.location.href=url;
    // }
  
    // handleRedirect = useCallback((url) => {
    //   return () => {
    //     articles.push(url);
    //   }
  
    
    render() {
      const { isLoading, articles } = this.state;
      
      return (
        <React.Fragment>
         
          <div className="container">
          <h2>Latest News API</h2>
          <div className="row">
            {!isLoading ? (
              articles.map(article => {
                const { date, title, url, img, desc, author  } = article;
                return (
                  
                  <div key={title} className='col-12 col-md-4 col-lg-3 mb-4'>  
                  <div className="card-group">
                    <div className="card">
                      <img className='img-fluid' src={img} alt='Image' />
                      <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <small>{date}</small>
                        <p className="card-text">{desc}</p>
                         <a className="btn btn-secondary btn-sm" target="_blank" href={url}>Read More </a>
                         {/* <button className="btn btn-secondary btn-sm" {handleRedirect('url')}>Read More</button>  */}
                      </div>
                    <div className="card-footer">
                      <small className="text-muted"><strong>Author</strong>{author}</small>
                    </div>
                  </div>
                  </div>
                  </div>
                 
                );
              })
            ) : (
              <p>Loading...</p>
            )}
             </div>
          </div>
        </React.Fragment>
      );
    }
  }
  export default Hotel;
  
  
  