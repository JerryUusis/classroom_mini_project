export function getNumberOfGrades(grades: number[]): number {
  return grades.length;
}

export function getSumGrades(grades: number[]): number {
  let sum: number = 0;

  for (const grade of grades) {
    sum += grade;
  }
  return sum;
}

export function getAverageValue(grades: number[]): number {
  const total = getSumGrades(grades);
  const amount = getNumberOfGrades(grades);
  return total / amount;
}

export function getPassingGrades(grades: number[]): number[] {
  const passingGrades: number[] = [];

  for (const grade of grades) {
    if (grade >= 10) {
      passingGrades.push(grade);
    }
  }
  return passingGrades;
}

export function getFailingGrades(grades: number[]): number[] {
    const failingGrades: number[] = [];

    for (const grade of grades) {
        if (grade < 10) {
            failingGrades.push(grade)
        }
    }
    return failingGrades;
}

export function getRaisedGrades(grades: number[]): number[] {
    const raisedGrades: number[] = [];

    for (const grade of grades) {
        if (grade < 20) {
            raisedGrades.push(grade + 1)
        }
        else {
            raisedGrades.push(grade)
        }
    }
    return raisedGrades;
}
