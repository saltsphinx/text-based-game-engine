function removeProps(obj) {
  for (let propName in obj) {
    delete obj[propName];
  }
}