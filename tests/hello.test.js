function hello() {
  return null;
}

test.skip('should say hello', () => {
  const helloJohn = hello('John');
  const helloAlex = hello('Alex');
  expect(helloJohn('Hello')).toEqual('Hello John');
  expect(helloAlex('Hi')).toEqual('Hi Alex');
});
