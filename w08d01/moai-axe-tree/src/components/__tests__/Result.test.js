import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Result from '../Result';

// import the library under test
import axios from 'axios';

// tell jest to mock axios
jest.mock('axios');

// fake data
const data = [
  {
    id: 1,
    name: "Alice",
    points: 15
  },
  {
    id: 2,
    name: "Bob",
    points: 10
  },
  {
    id: 3,
    name: "Carol",
    points: 5
  },
];

test('can display results from an api call (mocking Axios)', () => {
  // return the desired data when axios requests get made
  axios.get.mockResolvedValue({ data });

  // render the component
  const { getByTestId, findByText } = render(<Result status="Won" />);

  // grab the "high-scores" button
  const highScoreButton = getByTestId('high-scores');

  // click on the high scores button
  fireEvent.click(highScoreButton);

  // expect to find known data in the DOM
  return findByText('Bob', { exact: false });
});

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('mocking functions', () => {
  const fakeFn = jest.fn();
  const result = fakeFn('something');

  expect(result).toBe(undefined);
  expect(result).toBeUndefined();

  expect(fakeFn).toHaveBeenCalled();
  expect(fakeFn).toHaveBeenCalledTimes(1);
  expect(fakeFn).toHaveBeenCalledWith('something');
});
