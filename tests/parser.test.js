const parser = require('../src/parser.js');

it('throws an error if no string is passed', () => {
  expect(() => parser()).toThrow();
});

it('returns a string and an array', () => {
  const {command, words} = parser('test');

  expect(typeof command).toBe('string');
  expect(Array.isArray(words)).toBe(true);
});

it('parses a string with a single word', () => {
  const {command, words} = parser('test');

  expect(command).toBe('test');
  expect(words.length).toBe(0);
});

it('returns empty string and array', () => {
  const {command, words} = parser('');

  expect(command).toBe('');
  expect(words.length).toBe(0);
});

it('parsers string with multiple words', () => {
  const {command, words} = parser('test testWord0 testWord1');
  
  expect(words).toEqual(['testWord0', 'testWord1']);
});