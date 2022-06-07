function demo() {
  for(var i = 0; i < 10; i++) {
    console.log('hello world?', i);
  }
  return `${1 + 2 + 3}`
}
console.log('hello world?', demo())
