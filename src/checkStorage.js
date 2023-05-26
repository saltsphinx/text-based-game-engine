function storageAvailable()
{
  try {
    const x = 'test';
    localStorage.setItem(x, x);
    localStorage.removeItem(x);
    return true;
  } catch (error) {
    return error;
  }
}

module.exports = storageAvailable;