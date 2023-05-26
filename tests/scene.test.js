const Scene = require('../src/scene');
let testScene;

beforeEach(() => {
  testScene = Scene();
});

it('adds a command with a single alias', () => {
  const cb = () => {};
  testScene.addCommand(cb, 'testing');

  expect(testScene.commands['testing'] === cb).toBe(true);
});

it('adds a command with multiple aliases', () => {
  testScene.addCommand(() => {}, 'testing', 't', 'check');
  const commands = testScene.commands;

  expect(commands['testing'] && commands['t'] && commands['check']).toBeTruthy();
});