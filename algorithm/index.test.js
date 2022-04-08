import gradingStudents from "."

const exampleStudents = [
  {
    name: 'John',
    score: 37
  },
  {
    name: 'Anna',
    score: 84
  },
  {
    name: 'William',
    score: 70
  },
  {
    name: 'Carol',
    score: 41
  },
  {
    name: 'Pedro',
    score: 4
  },
  {
    name: 'Ronald',
    score: 66
  },
  {
    name: 'Bella',
    score: 93
  }
]

const expectedResult = [
  {
    name: 'Anna',
    score: 85
  },
  {
    name: 'William',
    score: 70
  },
  {
    name: 'Ronald',
    score: 66
  },
  {
    name: 'Bella',
    score: 95
  }
]

describe('Grading students', () => {
  it('returns an array of objects', () => {
    const result = gradingStudents(exampleStudents)
    expect(result).toBeInstanceOf(Array)
    expect(result[0]).toBeInstanceOf(Object)
  })

  it('returns the correct number of approvals', () => {
    const result = gradingStudents(exampleStudents)
    expect(result.length).toBe(4)
  })

  it('returns the finalScore property', () => {
    const result = gradingStudents(exampleStudents)
    expect(result[0]).toHaveProperty('finalScore')
  })

  it('rounds the students scores correctly', () => {
    const result = gradingStudents(exampleStudents)
    expect(result[1]).toHaveProperty('finalScore', 85)
  })

  it('omits the original score property', () => {
    const result = gradingStudents(exampleStudents)
    expect(result[0]).not.toHaveProperty('score')
  })

  it('matches the snapshot', () => {
    const result = gradingStudents(exampleStudents)
    expect(result).toMatchObject(expectedResult)
  })
})