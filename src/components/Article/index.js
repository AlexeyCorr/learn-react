import React from 'react';

class Article extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentWillMount() {
    console.log('---', 'mounting');
  }

  componentWillUpdate() {
    console.log('---', 'will update')
  }

  render() {
    const {article, isOpen, onButtonClick} = this.props;
    const text = isOpen && <p className="card-text">{article.text}</p>;
    return (
      <div>
        <section className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h2 className="card-title" onClick={this.incrementCounter}>
              {article.title}  
              Clicked: {this.state.count}
            </h2>
            <button className="btn btn-dark" onClick={onButtonClick}>
              {isOpen ? 'close' : 'open'}
            </button>
          </div>
          <div className="card-body">
            <h6 className="card-subtitle text-muted">
              Creation Date: {(new Date(article.date)).toDateString()}
            </h6>
            {text}
          </div>
          
        </section>
      </div>
    )
  }

  incrementCounter = () => this.setState({
    count: this.state.count + 1
  })
}

export default Article;