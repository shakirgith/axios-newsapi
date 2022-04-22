import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from '../components/Loading';
import MyNews from '../components/News';
import Pagination from '../components/Pagination';


const Newsapi = () => {

//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const getUsers = async () => {
//       try {
//           const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=e901d5b623f848939ad3692073bfd152');
//            setLoading(false);
//            setArticles(await response.json());
//       } catch (error) {
//           setLoading(false);
//           // console.log("my error is "+ error);
//          console.log(articles);
//       }

//   }
  


// useEffect(() => {
//     getUsers();
// }, []);

// if (loading) {
//     return <Loading />
// }


    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(8);

      const fetchNews = () => {
        
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=e901d5b623f848939ad3692073bfd152')
        .then((response) => {
        //console.log(response);
        setLoading(false);
        setNews(response.data.articles);
        })
       
        .catch(error => {
            setLoading(true);
            console.log("my error is "+ error);

        })

    }

useEffect(() => {
    fetchNews();
}, []);


if (loading) {
    return <Loading />
}

  // Get current posts
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


    return (


          <>
           <MyNews news={currentNews} />
          {/* <MyNews news={currentPage} key={news} /> */}
          <Pagination newsPerPage={newsPerPage} totalNews={news.length} paginate={paginate} />
          </>
        )
    }

export default Newsapi;


