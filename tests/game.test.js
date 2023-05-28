let game;

beforeEach(() => {
  game = require('../src/game');
});

it('adds scene commands to own commands', () => {
  game.scenes.testScene = { commands: { testProperty: 'testValue'} };
  game.initializeScene('testScene');

  expect(game.commands).toHaveProperty('testProperty', 'testValue');
});

it('dumps previous scenes commands', () => {
  game.scenes.testScene0 = { commands: { testProperty0: 'testValue'} };
  game.scenes.testScene1 = { commands: { testProperty1: 'testValue' } };
  game.initializeScene('testScene0');
  game.initializeScene('testScene1');

  expect(game.commands).not.toHaveProperty('testProperty0');
  expect(game.commands).toHaveProperty('testProperty1');
});

it ('adds default commands even after dumping', () => {
  game.defaultCommands.testDefault = 'testValue';
  game.scenes.testScene = { commands: { testProperty: 'testValue'} };
  game.initializeScene('testScene');

  expect(game.commands).toHaveProperty('testDefault', 'testValue');
});

it('calls a command with given parameters', () => {
  const cb = (data, para) => { data['testProperty'] = para };
  game.commands.testMethod = cb;

  game.callCommand('testMethod', 'testValue');

  expect(game.data).toHaveProperty('testProperty', 'testValue');
});