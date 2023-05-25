// const callCommand = function(alias, ...parameters) {
//   const command = commands[alias];
//   if (!command) return;

//   command(data, ...parameters);
// }

function Game() {
  const scenes = {};
  let commands = {};
  
  const initializeScene = (sceneName) => {
    const scene = scenes[sceneName];
    if (!scene) return;

    removeProps(commands);
    Object.assign(commands, scene.commands);
  };

  return {
    commands,
    scenes,
    initializeScene,
  };
}

function removeProps(obj) {
  for (let propName in obj) {
    delete obj[propName];
  }
}

module.exports = Game;