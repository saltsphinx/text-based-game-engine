const checkStorage = require('./checkStorage');

function saveData(obj, key) {
  const result = checkStorage();
  if (result !== true) return console.log('local storage isn\' avaliable. Saving cancelled.', result);

  const stringifiedObj = JSON.stringify(obj);
  localStorage[key] = stringifiedObj;
}

function loadData(key) {
  const result = checkStorage();
  if (result !== true) return console.log('local storage isn\' avaliable. Saving cancelled.', result);

  const stringifiedObj = localStorage.getItem(key);
  if (!stringifiedObj) throw new Error(`Save data at key of ${key} not found!`);

  try {
    return JSON.parse(stringifiedObj);
  } catch (e) {
    console.log(e);
    throw new Error(`Invalid JSON at key ${key}, ${stringifiedObj}`);
  }
}

module.exports = {
  saveData,
  loadData,
};