function Game() {
  const callCommand = function(alias, ...parameters) {
    const command = this.commands[alias];
    if (!command) return;

    command(this.data, ...parameters);
  };

  const initializeScene = function(sceneName) {
    const scene = this.scenes[sceneName];
    if (!scene) return;

    this.commands = {...scene.commands, ...this.defaultCommands};
    
    for (let propName in scene.data) {
      if (this.data[propName]) {
        console.log(`${propName} already exists!`);
        continue;
      }

      this.data[propName] = scene[propName];
    }
  };

  return {
    data: {},
    scenes: {},
    defaultCommands: {},
    commands: {},
    callCommand,
    initializeScene,
  };
}

module.exports = Game;