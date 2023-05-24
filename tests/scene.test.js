const Scene = require('../src/scene');
let testScene;
let data;

beforeEach(() => {
  data = {};
  testScene = Scene(data, 'test');
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

it('calls a command with given parameters', () => {
  const cb = (data, para) => { data['save'] = para };
  testScene.addCommand(cb, 'testing');
  testScene.callCommand('testing', 'saved');

  expect(data).toHaveProperty('save', 'saved');
});