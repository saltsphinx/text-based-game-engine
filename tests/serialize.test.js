const serialize = require('../src/serialize');
require('jest-localstorage-mock');

afterEach(() => {
  localStorage.clear();
});

it('saves data to localStorage', () => {
  const testObj = { testProp0: 'testValue', testProp1: '7357' };

  serialize.saveData(testObj, 'testData');
  expect(localStorage).toHaveProperty('testData');
});

it('loads data from localStorage', () => {
  const testObj = { testProp0: 'testValue', testProp1: '7357' };

  serialize.saveData(testObj, 'testData');
  expect(serialize.loadData('testData')).toEqual(testObj);
});