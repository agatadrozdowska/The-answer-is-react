import React from 'react';
import PropTypes from 'prop-types';
import Clue from './Clue.js';

const Category = props => {
  return (
    <div className={'category'} data-testid="category">
      {/* display category */}
      {/* display clues for each category */}
      <div>{props.category.title}</div>
      {props.category.clues.map(clue => <Clue clue={clue} handleClueValueClick={props.handleClueValueClick} answeredQuestions={props.answeredQuestions} addAnswer={props.addAnswer}/>)}
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Category;
