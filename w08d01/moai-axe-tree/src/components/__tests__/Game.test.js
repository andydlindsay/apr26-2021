import React from 'react';
import { render, fireEvent, prettyDOM } from '@testing-library/react';
import Game from '../Game';

describe('tests for the Game component', () => {

  test('can toggle the cheating state by clicking on the robot head icon', () => {
    const { getByTestId, container, debug } = render(<Game />);

    // prettyDOM
    // console.log(prettyDOM(container));

    // debug
    // debug();

    // global import, you have to provide the "container"
    // getByTestId(container, 'robot-head')

    // local destructuring, you don't need to provide a "container"
    const robotHeadIcon = getByTestId('robot-head');

    fireEvent.click(robotHeadIcon);
    
    expect(robotHeadIcon).toHaveClass('cheating');
    
    fireEvent.click(robotHeadIcon);
    
    expect(robotHeadIcon).not.toHaveClass('cheating');
  });

});
