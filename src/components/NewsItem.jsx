import { Component } from 'react';
import '../styles/News.css';
import defaultPreview from "../assets/images.jpg";

export default class NewsItem extends Component {
  render() {

    let {title, description, imageUrl, newsUrl, keys} = this.props;

    return (
      <div className="news-card" keys={keys}>
        <div>
            <img 
              className='news-image' 
              src={imageUrl || defaultPreview} 
              alt='News'
              onError={(elem) => {
                  elem.currentTarget.src = defaultPreview;
              }}
            />
        </div>

        <div  className="news-info-row">
          <div className="news-info">
              <div className="newstitle">
                    <span>{title}...</span>
              </div>

              <div className="news-description">
                    {description}...
              </div>
          </div>

          <div className='readmore'>
            <a className='readmore-btn' href={newsUrl} target='_blank'>Read More </a>
          </div>
        </div>
      </div>
    )
  }
}
