function Scene(name) {
  const commands = {};
  const addCommand = function(cb, ...aliases) {
    aliases.forEach((alias) => {
      if (this.commands[alias]) throw new Error('Alias already exists');

      this.commands[alias] = cb;
    })
  };

  return {
    name,
    commands,
    addCommand,
  };
}

module.exports = Scene;