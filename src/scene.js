function Scene() {
  const commands = {};
  const addCommand = function(cb, ...aliases) {
    aliases.forEach((alias) => {
      if (commands[alias]) throw new Error('Alias already exists');

      commands[alias] = cb;
    })
  };

  return {
    get commands() { return { ...commands } },
    addCommand,
  };
}

module.exports = Scene;