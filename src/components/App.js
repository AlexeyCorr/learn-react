import React from 'react';
import ArticleList from './ArticleList';
import articles from './../data';
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      reverted: false
    }
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron d-flex justify-content-between align-items-center">
          <h1 className="display-3">Learn React</h1>
          <button className="btn btn-primary" type="button" onClick={this.revert}>revert</button>  
        </div>
        <ArticleList articles={this.state.reverted ? [...articles].reverse() : articles}/>
      </div>
    )
  }

  revert = () => this.setState({
    reverted: !this.state.reverted
  })
}

export default App;