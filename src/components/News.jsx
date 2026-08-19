import { Component } from "react";
import "../styles/News.css";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";
import "../styles/Pagination.css";
import Spinner from "./Spinner";

export default class News extends Component {
  apiKey = import.meta.env.VITE_OPEN_SOURCE_API_KEY;

  pageSize = this.props.pageSize;
  category = this.props.category;

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?category=${this.category}&apiKey=${this.apiKey}&page=1&pageSize=${this.pageSize}`;

    this.setState({ loading: true });

    const data = await fetch(url);
    const parseData = await data.json();

    this.setState({
      articles: parseData.articles,
      loading: false,
    });
  }

  handleNextClick = async () => {
    const nextPage = this.state.page + 1;

    const url = `https://newsapi.org/v2/top-headlines?category=${this.category}&apiKey=${this.apiKey}&page=${nextPage}&pageSize=${this.pageSize}`;

    this.setState({ loading: true });

    const data = await fetch(url);
    const parseData = await data.json();

    this.setState({
      page: nextPage,
      articles: parseData.articles,
      loading: false,
    });
  };

  handlePrevClick = async () => {
    const prevPage = this.state.page - 1;

    const url = `https://newsapi.org/v2/top-headlines?category=${this.category}&apiKey=${this.apiKey}&page=${prevPage}&pageSize=${this.pageSize}`;

    this.setState({ loading: true });

    const data = await fetch(url);
    const parseData = await data.json();

    this.setState({
      page: prevPage,
      articles: parseData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div>
          <h2 className="header">Top headlines</h2>

          {this.state.loading && <Spinner />}

          <div className="news-container">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
          </div>

          <Pagination
            page={this.state.page}
            handleNext={this.handleNextClick}
            handlePrev={this.handlePrevClick}
          />
        </div>
      </>
    );
  }
}
