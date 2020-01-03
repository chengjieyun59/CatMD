import React, { Component } from 'react';
import '../styles.css';
import PostItem from './PostItem.jsx';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  getData() {
    fetch('/api/getData')
    .then(res => res.json())
    .then((cats) => {
      // console.log('cats: ', cats);
      if (!Array.isArray(cats)) cats = [];
      return this.setState({ posts: cats });
    })
    .catch(err => console.log('get cats error: ', err));
  }

  handleClick(name) {
    const currState = Object.assign(this.state, {});
    for (let post of currState.posts) {
      if (name === post.name) {
        console.log('post: ', post, 'name:', name);
        fetch('/api/getData', {
          method: 'DELETE',
          headers: {
            "Content-Type": 'Application/JSON'
          },
          body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log('delete cats error: ', err));
      }
    }
  }

  render() {
    this.getData();
    const postArray = [];
    for (let i = 0; i < this.state.posts.length; i += 1) {
      postArray.push(<PostItem key={i} pet={this.state.posts[i]} handleClick={this.handleClick} />);
    }
    return (
      <div className="container-posts">
        {postArray}
      </div>
    );
  }
}

export default Posts;