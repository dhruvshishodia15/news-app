import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps = {
    category: 'business'
  }

   static propTypes = {
    category: PropTypes.string,
  }

  constructor() {
    super();
    console.log("hello")
    this.state = {
      articles: [],
    }
  }

  async componentDidMount() {
  let url =  `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=2a1c8bd7514d4b4cac214c758f84606b&page=1`;
  let data = await fetch(url)
  let parseddata = await data.json()
  console.log(parseddata)
  this.setState({ articles: parseddata.articles })
}

handlenextclick = async () => {
  console.log("djdhewuhdue")
  let url2 =  `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=2a1c8bd7514d4b4cac214c758f84606b&page=2`;
  let data = await fetch(url2)
  let parseddata = await data.json()
  console.log(parseddata)
  this.setState({ articles: parseddata.articles })
}

handlepreclick = async () => {
  let url =  `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=2a1c8bd7514d4b4cac214c758f84606b&page=1`;
  let data = await fetch(url)
  let parseddata = await data.json()
  console.log(parseddata)
  this.setState({ articles: parseddata.articles })
}


  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center my-3">NewsClub - Top Headlines</h1>
        
        <div className="row justify-content-center">
          {this.state.articles.map((element) =>
            <div className="col-md-3 my-2" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
            </div>
          )}
        </div>

        <div className="container d-flex justify-content-around my-3">
          <button type="button" className="btn btn-dark mx-2" onClick={this.handlepreclick}>⬅️ Previous</button>
          <button type="button" className="btn btn-dark mx-2" onClick={this.handlenextclick}>Next ➡️</button>
        </div>

      </div>
    )
  }
}
