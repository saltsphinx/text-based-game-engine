function parser(input) {
  if (typeof input != 'string') throw new Error('String must be passed to parser! Input: ' + input);
  const parsedInput = input.trim().split(' ').filter((str) => str !== '');
  let command = parsedInput.shift();

  if (typeof command != 'string') command = '';
  return {
    command,
    words: parsedInput,
  };
}

module.exports = parser;