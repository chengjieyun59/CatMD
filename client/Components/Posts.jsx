import React, { Component } from 'react';
import '../styles.css';
import PostItem from './PostItem.jsx';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isEditing: []
    }
    this.getData = this.getData.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleClickSave = this.handleClickSave.bind(this);
    this.handleSavetoDB = this.handleSavetoDB.bind(this);
  }

  // get all data from the database
  getData() {
    fetch('/api/getData')
    .then(res => res.json())
    .then((cats) => {
      // console.log('cats: ', cats);
      if (!Array.isArray(cats)) cats = [];
      if (this.state.isEditing.length !== this.state.posts.length) {
        const isEditing = [];
        for (let i = 0; i < cats.length; i += 1) {
          isEditing.push(false);
        }
        this.setState({ isEditing });
      }
      return this.setState({ posts: cats });
    })
    .catch(err => console.log('get cats error: ', err));
  }

  // delete the post from the database
  handleClickDelete(name) {
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

  // open an edit box for that post
  handleClickEdit(name, description) {
    for (let i = 0; i < this.state.posts.length; i += 1) {
      if (this.state.posts[i].name === name) {
        const isEditing = [].concat(this.state.isEditing);
        isEditing[i] = true;
        this.setState({ isEditing });
      }
    }
  }


  handleClickSave(event, key) {
    // console.log('key', key);
    const posts = [].concat(this.state.posts);
    posts[key].description = event.target.value;
    this.setState({
      posts
    });
    console.log('this.state.posts[key]: ', this.state.posts[key]);
  }

  handleSavetoDB(event, key) {
    console.log('editted this.state.posts[key]: ', this.state.posts[key]);
    const data = {
      posts: this.state.posts,
      isEditing: this.state.isEditing
    };
    event.preventDefault();
    fetch('/api/getData', {
      method: 'PUT',
      headers: {
        "Content-Type": 'Application/JSON'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      console.log('result: ', result)
    })
    .catch(err => console.log('edit cats error: ', err));

    const isEditing = [].concat(this.state.isEditing);
    isEditing[key] = false;
    this.setState({ isEditing });

    // const currState = Object.assign(this.state, {});
    // for (let i = 0; i < currState.posts.length; i += 1) {
    //   const post = currState.posts[i];
    //   if (this.currState.isEditing[i] === true) {
    //     console.log('post: ', post);
    //     fetch('/api/getData', {
    //       method: 'PUT',
    //       headers: {
    //         "Content-Type": 'Application/JSON'
    //       },
    //       body: JSON.stringify(post)
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log('delete cats error: ', err));

    //     const isEditing = [].concat(this.state.isEditing);
    //     isEditing[i] = false;
    //     this.setState({ isEditing });
    //   }
    // }
  }

  render() {
    this.getData();
    const postArray = [];
    for (let i = 0; i < this.state.posts.length; i += 1) {
      let toShow;
      // console.log('this.state.isEditing: ', this.state.isEditing);
      if (!this.state.isEditing[i]) {
        toShow = <PostItem key={i} pet={this.state.posts[i]} isEditing={this.state.isEditing} handleClickDelete={this.handleClickDelete} handleClickEdit={this.handleClickEdit} />;
      } else {
        toShow = (
          <div className="toShow">
            <PostItem key={i} pet={this.state.posts[i]} isEditing={this.state.isEditing} handleClickDelete={this.handleClickDelete} handleClickEdit={this.handleClickEdit} />
            <form key={i+100} onSubmit={() => this.handleSaveEdit(event, i)}>
              <label>
                Comment: <input type="text" key={i} placeholder={this.state.posts[i].description} />
              </label>
              <input type="submit" key={i} value="Submit" id="submitButton" onClick={() => this.handleChange(event, i)}/>
            </form>
          </div>
        );
      }
      postArray.push(toShow);
    }
    return (
      <div className="container-posts">
        {postArray}
      </div>
    );
  }
}

export default Posts;