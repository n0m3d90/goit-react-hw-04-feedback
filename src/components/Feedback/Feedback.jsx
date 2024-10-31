import React from 'react';
import { Wrapper, Button } from './Feedback.styles';
import PropTypes from 'prop-types';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map((option) => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </Wrapper>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
