function fruits() {
  return null;
}

test.skip('should return fruits only', () => {
  const input = [
    { name: 'Apple', isFruit: true },
    { name: 'Onion', isFruit: false },
    { name: 'Banana', isFruit: true },
    { name: 'Tomato', isFruit: false },
    { name: 'Cucumber', isFruit: false },
    { name: 'Strawberry', isFruit: true },
  ];

  const expected = ['Apple', 'Banana', 'Strawberry'];

  expect(fruits(input)).toEqual(expected);
});
