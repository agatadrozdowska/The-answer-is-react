import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gameboard from "./Gameboard";

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
    if (this.state.userResponse === this.props.clue.answer) {
      this.props.addValueToScore(this.props.clue.value);
      this.props.addAnswer(this.props.clue);
      this.setState({
        userResponse: ''
      })

    } else {
      this.props.substractValueFromScore(this.props.clue.value);
      this.setState({
        userResponse: ''
      })
    }
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