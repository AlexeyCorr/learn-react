import React, {Component} from 'react';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.onButtonClick = this.buttonClick.bind(this);
  }
  render() {
    const {article} = this.props;
    const text = this.state.isOpen && <p>{article.text}</p>;
    return (
      <div className='article'>
        <section>
          <h2>{article.title}</h2>
          <button onClick={this.onButtonClick}>
            {this.state.isOpen ? 'close' : 'open'}
          </button>
          {text}
          <span>Creation Date: {(new Date(article.date)).toDateString()}</span>
        </section>
      </div>
    )
  }
  buttonClick() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Article;