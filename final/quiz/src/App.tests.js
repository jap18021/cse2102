import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('First question rendered', () => {
  const { getByText } = render(<App />);
  const questionText = getByText(/What is the average lifespan of most otter species in the wild??/i);
  expect(questionText).toBeInTheDocument();
});

test('Proper Answer and Next Question', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText(/10-15 years/i));
  const nextQuestionText = getByText(/What is the primary diet of otters?/i);
  expect(nextQuestionText).toBeInTheDocument();
});

test('displays the final score at the end of the quiz', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText(/10-15 Years/i));
  fireEvent.click(getByText(/Fish/i));
  fireEvent.click(getByText(/They secrete oils from special glands/i));
  fireEvent.click(getByText(/Raft/i));
  fireEvent.click(getByText(/Oceans/i));
  fireEvent.click(getByText(/Hearing/i));
  fireEvent.click(getByText(/Mustelidae/i));
  fireEvent.click(getByText(/Vocalizations/i));
  fireEvent.click(getByText(/Exercise and play/i));
  fireEvent.click(getByText(/Sea Otter/i));

  const finalScoreText = getByText(/Your otter affinity is 100%/i);
  expect(finalScoreText).toBeInTheDocument();
});
