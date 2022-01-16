import React, { useEffect, useState } from 'react'
import "./News.css"
const News = () => {

    const [news, setNews] = useState([]);
    const getNews = async () => {
        const response = await fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=d97b8e7d894740d9b8476ef11afce07a');
        const n = await response.json();
        setNews(n.articles);
    }
    useEffect(() => {
        getNews();
    }, []);
    return (
        <div>
             <div className='header'><h1>News App</h1></div>
            {
                news.map((curNews, i) => {
                    return (
                       
                        <div className='card_wrapper'>
                            <div className='news_card'>
                                <h2 key={i}> {curNews.title}</h2>
                                <p>{curNews.description}</p>
                                <a href={curNews.url} >Read moree...</a>
                                <div className='img_holder'><img src={curNews.urlToImage} /></div>

                            </div>

                        </div>

                    )
                })
            }
        </div>
    )
}

export default News
// ok

// issue kya tha?