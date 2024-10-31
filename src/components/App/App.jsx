import React, { useState } from 'react';
import { Container } from './App.styles';
import { Section } from '../Section/Section';
import { Feedback } from '../Feedback/Feedback';
import { Statistics } from '../Statistics/Staticstics';
import { Notification } from '../Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((feedback.good / total) * 100) : 0;
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = Object.keys(feedback);

  return (
    <Container>
      <Section title="Please leave feedback">
        <Feedback onLeaveFeedback={onLeaveFeedback} options={options} />
      </Section>
      <Section title="Statistics">
        {totalFeedback !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
