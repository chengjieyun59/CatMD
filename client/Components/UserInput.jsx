import React from 'react';

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petName: '',
      petPhotoUrl: '',
      petDescription: ''
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({
      petName: event.target.value
    });
  }

  handleChange2(event) {
    this.setState({
      petPhotoUrl: event.target.value
    });
  }

  handleChange3(event) {
    this.setState({
      petDescription: event.target.value
    });
  }

  handleSubmit(event) {
    const data = {
      petName: this.state.petName,
      petPhotoUrl: this.state.petPhotoUrl,
      petDescription: this.state.petDescription
    };
    console.log('data', data);
    event.preventDefault();
    fetch('/api/getData', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log('data: ', data);
    })
    .catch(err => console.log('UserInput fetch /api/getData: ERROR: ', err));
  }

  render() {
    return (
      <div className="userInput">
        <h3>Post something..</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pet name: <input type="text" value={this.state.petName} onChange={this.handleChange1} />
          </label>
          <br />
          <label>
            Photo url: <input type="text" value={this.state.petPhotoUrl} onChange={this.handleChange2} />
          </label>
          <br />
          <label>
            Comment: <input type="text" value={this.state.petDescription} onChange={this.handleChange3} />
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" id="submitButton" />
        </form>
      </div>
    );
  }
}

export default UserInput;