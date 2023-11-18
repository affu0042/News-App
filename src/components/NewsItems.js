import React from 'react'
import './News.css'
const NewsItems = ({title , description , src , url}) => {
  return (
        <div className="card border-0 bg-dark text-light mb-3 d-inline-block my-2 mx-2 px-1 py-1" style={{maxWidth:"294px",margin: "0 auto"}}>
  <img src= {src?src:"https://play-lh.googleusercontent.com/8LYEbSl48gJoUVGDUyqO5A0xKlcbm2b39S32xvm_h-8BueclJnZlspfkZmrXNFX2XQ"} style={{height:"150px",width:"285px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {title.slice(0,50)} </h5>
    <p className="card-text"> {description?description.slice(0,50):" Scientists unveil SunFlow Tech, enhancing solar panels, 30% more efficient, cutting-edge nanomaterials. Green energy's future brighter."} </p>
    <a href= {url} className="btn btn-primary">Read More </a>
  </div>
</div>

  )
}

export default NewsItems