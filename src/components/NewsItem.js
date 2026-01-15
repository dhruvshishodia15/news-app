import React, { Component } from 'react'

export default class Newsitem extends Component {

  render() {
    let {title, description, imageurl, newsurl, author, date} = this.props
    return (
      <div>
          <div className="card" style={{width: "x   18rem"}}>
            <img src={imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href= {newsurl}  target='_blank' rel="noreferrer" className="btn btn-primary">Read more</a>
             <p className="card-text"><small class="text-body-secondary">By {author?author:"unknown"} on {date}</small></p>
        </div>
      </div>
      </div>
    )
  }
}
