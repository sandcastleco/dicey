var levels = [
  {
    id: 1,
    name: "Example level 1",
    challenges: [
      {
        id: 1,
        parameters: {
          time: 3,
          dice: [
            { type: 8, number: 3 }
          ]
        }
      },
      {
        id: 2,
        parameters: {
          time: 5,
          dice: [
            { type: 6, number: 5 }
          ]
        }
      }
    ]
  },
  {
    id: 2,
    name: "Example level 2",
    challenges: [
      {
        id: 1,
        parameters: {
          time: 3,
          dice: [
            { type: 6, number: 2 },
            { type: 8, number: 2 },
            { type: 20, number: 2 }
          ]
        }
      }
    ]
  }
]

exports.levels = levels;
