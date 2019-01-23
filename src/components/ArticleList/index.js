import React from 'react';
import Article from './../Article';
import './style.css';

class ArticleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openArticleId: null
    }
  }
  render() {
    const articleElements = this.props.articles.map((article, index) => 
      <li key={article.id}>
        <Article 
          article={article} 
          isOpen={this.state.openArticleId === article.id}
          onButtonClick={this.handleClick.bind(this, article.id)}
          />
      </li>);
    return (
      <ul className="article_list">
        {articleElements}
      </ul>
    )
  }

  handleClick = (openArticleId) => this.setState({
    openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId 
  })
}

export default ArticleList;