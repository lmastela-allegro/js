function groupBy() {
  return null;
}

test.skip('should return planets grouped by type', () => {
  const input = [
    { type: 'terrestrial planets', name: 'Mercury', order: 0 },
    { type: 'terrestrial planets', name: 'Venus', order: 1 },
    { type: 'terrestrial planets', name: 'Earth', order: 2 },
    { type: 'terrestrial planets', name: 'Mars', order: 3 },
    { type: 'gas gigants', name: 'Jupiter', order: 4 },
    { type: 'gas gigants', name: 'Saturn', order: 5 },
    { type: 'ice gigants', name: 'Uranus', order: 6 },
    { type: 'ice gigants', name: 'Neptune', order: 7 },
  ];

  const expected = {
    'terrestrial planets': [
      { name: 'Mercury', order: 0 },
      { name: 'Venus', order: 1 },
      { name: 'Earth', order: 2 },
      { name: 'Mars', order: 3 },
    ],
    'gas gigants': [
      { name: 'Jupiter', order: 4 },
      { name: 'Saturn', order: 5 },
    ],
    'ice gigants': [
      { name: 'Uranus', order: 6 },
      { name: 'Neptune', order: 7 },
    ],
  };

  expect(groupBy(input)).toEqual(expected);
});
