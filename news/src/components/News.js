import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems';

const News = ({category}) => {
  const [articles,setarticles] = useState([]);
  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=18b4097e1909431e985a75d406b3ecdf` 
    fetch(url).then(response=> response.json()).then(data=>setarticles(data.articles))
  },[category])
  return (
    <div>
      <h2 className='text-center'> Latest <span className='badge bg-danger'>News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url = {news.url}/>
      })}
    </div>
  )
}

export default News