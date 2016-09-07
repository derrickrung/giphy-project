import React, { Component } from 'react';
import './App.css';
var giphy = require('giphy-api')('dc6zaTOxFJmzC');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={giphy.search('hello',function(err, res) {
            if(err) return err;
            return res[0]['data']['image_original_url']})} 
            alt="logo" />
          <h2>Welcome to MemeMe</h2>
          <p>Meme Central</p>
          <Feed />
        </div>
      </div>
    );
  }
}

class Feed extends Component {
  
  constructor() {
    super();
    this.state = {"votes": []}
  }

  componentDidMount() {
    let urls = []
    giphy.trending().then(function(res) {
      res.data.forEach(function(item) {
        urls.push(item.url)
      })
    })
    this.setState({
      votes: urls
    }).bind(this)
  }

  render() {
    return (
      <div id='feed' >
      </div>
    )
  }
}


// class FeedItem extends Component {
//   render() {
//     return (
//       <div className="feedItem" >
//       </div>
//     )
//   }

// }

export default App;
