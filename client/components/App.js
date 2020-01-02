import React, { Component } from 'react';
import { categories } from '../../testdata';
import Response from "./Response";
import Gameboard from "./Gameboard";
import Scoreboard from "./Scoreboard";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: categories,
      currentQuestion: {},
      answeredQuestions: [],
      score: 0
    };
  }
  componentDidMount() {
    // Getting data from an external API
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  }

  handleClueValueClick(clue) {
    this.setState({
      currentQuestion: clue
    })
  }

  addValueToScore(value) {
    var previousScore = this.state.score;
    this.setState({
      score: previousScore + value
    })
  }

  substractValueFromScore(value) {
    var previousScore = this.state.score;
    this.setState({
      score: previousScore - value
    })
  }

  render() {
    return (
      <div id={'app'}>
        What is Reactor 2?
        <Gameboard currentQuestion={this.state.currentQuestion} answeredQuestions={this.state.answeredQuestions} results={this.state.results} handleClueValueClick={this.handleClueValueClick.bind(this)}/>
       <Scoreboard score={this.state.score}/>
       <Response clue={this.state.currentQuestion} score={this.state.score} addValueToScore={this.addValueToScore.bind(this)} substractValueFromScore={this.substractValueFromScore.bind(this)}/>
      </div>
    );
  }
}
