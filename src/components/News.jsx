import { Component } from 'react'
import '../styles/News.css'
import NewsItem from './NewsItem'
import Pagination from './Pagination'
import '../styles/Pagination.css'


export default class News extends Component {

  pageSize = 20;
  nextPageAvail = true

  apiKey = import.meta.env.VITE_OPEN_SOURCE_API_KEY;
;

  constructor() {
    super();

    this.state = {
       articles: [],
       loading: false,
       page: 1
    } 
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=Tech&apiKey=${this.apiKey}&page=1&pageSize=${this.pageSize}`;
    let data = await fetch(url);

    let parseData = await data.json();

    this.setState({
      articles: parseData.articles
    });
  };

  handleNextClick = async () => {
    const nextPage = this.state.page + 1;

    // nextPage + 1 > Math.ceil(totalResult/pageSize)

    const url = `https://newsapi.org/v2/everything?q=Tech&apiKey=${this.apiKey}&page=${nextPage}&pageSize=${this.pageSize}`;
    
    const data = await fetch(url);
    const parseData = await data.json();

    this.setState({
      page: nextPage,
      articles: parseData.articles
    });

  }

  handlePrevClick = async () => {

    const prevPage = this.state.page - 1;
    const url = `https://newsapi.org/v2/everything?q=Tech&apiKey=${this.apiKey}&page=${prevPage}&pageSize=${this.pageSize}`;
    
    const data = await fetch(url);
    const parseData = await data.json();

    this.setState({

      page: prevPage,
      articles: parseData.articles

    });
  }


  render() {

    let {theme} = this.props;
    return (
        <>
        <div data-theme={theme}>
          <h2 className="header">Top headlines</h2>

          <div className='news-container'>

          {this.state.articles.map((element) => {
            return <div>
                <NewsItem 
                  key={element.url} 
                  title={element.title} 
                  description={element.description} 
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
            </div>
          })}
          </div>
            
          <Pagination
            theme={theme}
            page={this.state.page}
            handleNext={this.handleNextClick}
            handlePrev={this.handlePrevClick}
            totalResult={this.state.totalResult}
            pageSize={this.pageSize}
          />

        </div>
        </>
    )
  }
}
