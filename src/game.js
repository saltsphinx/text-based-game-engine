function Game() {
  const data = {};
  const scenes = {};
  const defaultCommands = {};
  let commands = {};
  
  const callCommand = (alias, ...parameters) => {
    const command = commands[alias];
    if (!command) return;

    command(data, ...parameters);
  };

  const initializeScene = (sceneName) => {
    const scene = scenes[sceneName];
    if (!scene) return;

    removeProps(commands);
    Object.assign(commands, scene.commands, defaultCommands);
  };

  return {
    data,
    scenes,
    defaultCommands,
    commands,
    callCommand,
    initializeScene,
  };
}

function removeProps(obj) {
  for (let propName in obj) {
    delete obj[propName];
  }
}

module.exports = Game;