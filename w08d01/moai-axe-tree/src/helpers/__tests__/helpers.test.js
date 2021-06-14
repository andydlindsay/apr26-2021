import { announceResult, chooseRobotItem } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('chooseRobotItem function', () => {

  let testState;

  beforeEach(() => {
    testState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });

  test('given cheating is true, player selection is "tree", returns "axe"', () => {
    testState.cheating = true;
    testState.playerSelection = 'Tree';

    const actual = chooseRobotItem(testState.cheating, testState.playerSelection);
    const expected = 'Axe';

    // chooseRobotItem(false, 'Axe');

    expect(actual).toBe(expected);
  });

  test('given cheating is true, player selection is "axe", returns "moai"', () => {
    testState.cheating = true;
    testState.playerSelection = 'Axe';

    const actual = chooseRobotItem(testState.cheating, testState.playerSelection);
    const expected = 'Moai';

    expect(actual).toBe(expected);
  });

  test('given cheating is true, player selection is "moai", returns "tree"', () => {
    testState.cheating = true;
    testState.playerSelection = 'Moai';

    const actual = chooseRobotItem(testState.cheating, testState.playerSelection);
    const expected = 'Tree';

    expect(actual).toBe(expected);
  });

  test('given cheating is false, returns a valid selection', () => {
    testState.cheating = false;
    testState.playerSelection = 'Tree';

    const actual = chooseRobotItem(testState.cheating, testState.playerSelection);
    const options = ['Moai', 'Axe', 'Tree'];

    // expect(options.includes(actual)).toBe(true);
    expect(options).toContain(actual);
  });

});
