function Scene() {
  const addCommand = function(cb, ...aliases) {
    aliases.forEach((alias) => {
      if (this.commands[alias]) throw new Error('Alias already exists');

      this.commands[alias] = cb;
    })
  };

  return {
    commands: {},
    data: {},
    addCommand,
  };
}

module.exports = Scene;