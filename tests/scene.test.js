const Scene = require('../src/scene');
let testScene;

beforeEach(() => {
  testScene = Scene('test');
});

it('adds a command with a single alias', () => {
  const cb = () => {};
  testScene.addCommand(cb, 'testing');

  expect(testScene.commands['testing'] === cb).toBe(true);
});

it('adds a command with multiple aliases', () => {
  const commands = testScene.commands;
  testScene.addCommand(() => {}, 'testing', 't', 'check');

  expect(commands['testing'] && commands['t'] && commands['check']).toBeTruthy();
});

it('calls a command with given parameters', () => {
  const cb = (data, para) => { data['save'] = para };
  testScene.addCommand(cb, 'testing');
  testScene.callCommand('testing', 'saved');

  expect(testScene.data).toHaveProperty('save', 'saved');
});