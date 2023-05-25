function Scene(data) {
  const commands = {};
  const addCommand = function(cb, ...aliases) {
    aliases.forEach((alias) => {
      if (commands[alias]) throw new Error('Alias already exists');

      commands[alias] = cb;
    })
  };

  const callCommand = function(alias, ...parameters) {
    const command = commands[alias];
    if (!command) return;

    command(data, ...parameters);
  }

  return {
    get commands() { return { ...commands } },
    addCommand,
    callCommand,
  };
}

module.exports = Scene;