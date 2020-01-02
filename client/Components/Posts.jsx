import React, { Component } from 'react';
import '../styles.css'
import PostItem from './PostItem.jsx';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  getData() {
    fetch('/api/getData')
    .then(res => res.json())
    .then((cats) => {
      console.log('cats: ', cats);
      if (!Array.isArray(cats)) cats = [];
      return this.setState({ posts: cats });
    })
    .catch(err => console.log('get cats error: ', err));
  }

  render() {
    this.getData();
    const postArray = [];
    for (let i = 0; i < this.state.posts.length; i += 1) {
      postArray.push(<PostItem key={i} pet={this.state.posts[i]} />);
    }
    return (
      <div>
        {postArray}
      </div>
    );
  }
}

export default Posts;