import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Response extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userResponse: ''
    }
    this.recordResponse = this.recordResponse.bind(this);
    this.submitResponse = this.submitResponse.bind(this);
  }
  recordResponse(event) {
    this.setState({ userResponse: event.target.value });
  }

  submitResponse(event) {
    // this function should fire when the user fills the response and hits 'enter'
      // Is the user response correct? 
      // yes/no? What should happen?
    //return this.state.userResponse;
    //if (this.state.userResponse === )
    event.preventDefault();

  }
  render(){
    return (
      <div id={'response'} data-testid="response">
        <form onSubmit={this.submitResponse}>
          <input
              type='text'
              placeholder='Answers go here!'
              onChange={this.recordResponse}
              // handle data change
              // handle when 'enter' is hit
          >
          </input>
        </form>

      </div>
    )
  }
}

Response.propTypes = {
  recordResponse: PropTypes.func,
  submitResponse: PropTypes.func,
}