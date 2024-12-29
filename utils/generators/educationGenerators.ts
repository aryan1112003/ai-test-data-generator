import { faker } from '@faker-js/faker';
import type { Field } from '../../types/schema';

export const generateEducationData: Record<string, (field: Field) => any> = {
  courseCode: () => {
    const department = faker.helpers.arrayElement(['CS', 'MATH', 'PHYS', 'CHEM', 'BIO', 'ENG', 'HIST', 'PSYCH', 'ECON']);
    const number = faker.number.int({ min: 100, max: 499 });
    return `${department}${number}`;
  },
  grade: () => faker.helpers.arrayElement(['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F']),
  gpa: () => faker.number.float({ min: 0, max: 4, precision: 0.01 }).toFixed(2),
  major: () => faker.helpers.arrayElement([
    'Computer Science', 'Mathematics', 'Physics', 'Chemistry',
    'Biology', 'Engineering', 'Psychology', 'Economics',
    'Business Administration', 'English Literature'
  ]),
  degree: () => faker.helpers.arrayElement(['Bachelor', 'Master', 'PhD', 'Associate']),
  university: () => faker.company.name() + ' University',
  studentId: () => faker.string.alphanumeric(8).toUpperCase(),
  graduationYear: () => faker.date.future().getFullYear().toString(),
  credits: () => faker.number.int({ min: 0, max: 120 }),
};