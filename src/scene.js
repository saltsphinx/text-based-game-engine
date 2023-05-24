function Scene(name) {
  const commands = {};
  const data = {};
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
    get name() { return name },
    get commands() { return {...commands} },
    get data() { return structuredClone(data) },
    addCommand,
    callCommand,
  };
}

module.exports = Scene;