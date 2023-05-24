const Scene = require('../src/scene');

it('adds a command with a single alias', () => {
  const testScene = Scene('test');
  const cb = () => {};
  testScene.addCommand(cb, 'testing');

  expect(testScene.commands['testing'] === cb).toBe(true);
});

it('adds a command with multiple aliases', () => {
  const testScene = Scene('test');
  const commands = testScene.commands;
  testScene.addCommand(() => {}, 'testing', 't', 'check');

  expect(commands['testing'] && commands['t'] && commands['check']).toBeTruthy();
})
