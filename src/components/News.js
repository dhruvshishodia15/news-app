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
    this.state = {
      articles: [],
      loading: true
    }
  }

  async componentDidMount() {
    const url = `https://api.allorigins.win/raw?url=https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=YOUR_API_KEY&page=1`;

    const data = await fetch(url);
    const parsedData = await data.json();

    this.setState({
      articles: parsedData.articles || [],
      loading: false
    });
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center my-3">NewsClub - Top Headlines</h1>

        {this.state.loading && <p className="text-center">Loading news...</p>}

        <div className="row justify-content-center">
          {this.state.articles.map((element) => (
            <div className="col-md-3 my-2" key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                imageurl={element.urlToImage}
                newsurl={element.url}
                author={element.author}
                date={element.publishedAt}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
}
