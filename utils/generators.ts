import { faker } from '@faker-js/faker';
import type { Field } from '../types/schema';

const generateProductName = () => {
  const adjectives = ['Premium', 'Ultra', 'Deluxe', 'Professional', 'Essential'];
  const products = ['Laptop', 'Smartphone', 'Headphones', 'Camera', 'Tablet', 'Watch'];
  return `${faker.helpers.arrayElement(adjectives)} ${faker.helpers.arrayElement(products)}`;
};

const generateDiagnosis = () => {
  const conditions = [
    'Hypertension', 'Type 2 Diabetes', 'Asthma', 'Migraine',
    'Arthritis', 'Anxiety Disorder', 'Common Cold', 'Influenza'
  ];
  return faker.helpers.arrayElement(conditions);
};

const generateMedication = () => {
  const medications = [
    'Amoxicillin', 'Lisinopril', 'Metformin', 'Omeprazole',
    'Sertraline', 'Ibuprofen', 'Albuterol', 'Acetaminophen'
  ];
  return faker.helpers.arrayElement(medications);
};

const generateBloodType = () => {
  return faker.helpers.arrayElement(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']);
};

const generateTransactionType = () => {
  return faker.helpers.arrayElement(['Deposit', 'Withdrawal', 'Transfer', 'Payment', 'Refund']);
};

const generateDepartment = () => {
  return faker.helpers.arrayElement([
    'Engineering', 'Marketing', 'Sales', 'HR', 'Finance',
    'Customer Support', 'Operations', 'Research'
  ]);
};

const generateJobTitle = () => {
  return faker.helpers.arrayElement([
    'Software Engineer', 'Product Manager', 'Marketing Specialist',
    'Sales Representative', 'HR Manager', 'Financial Analyst'
  ]);
};

const generateCourseCode = () => {
  const department = faker.helpers.arrayElement(['CS', 'MATH', 'PHYS', 'CHEM', 'BIO', 'ENG']);
  const number = faker.number.int({ min: 100, max: 499 });
  return `${department}${number}`;
};

const generateGrade = () => {
  return faker.helpers.arrayElement(['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F']);
};

export const generateValue = (field: Field) => {
  switch (field.type) {
    case 'string':
      return faker.string.alphanumeric(10);
    case 'number':
      return faker.number.int({ min: field.min || 0, max: field.max || 100 });
    case 'boolean':
      return faker.datatype.boolean();
    case 'date':
      return faker.date.recent().toISOString();
    case 'email':
      return faker.internet.email();
    case 'phone':
      return faker.phone.number();
    case 'address':
      return faker.location.streetAddress();
    case 'name':
      return faker.person.fullName();
    case 'product':
      return generateProductName();
    case 'price':
      return faker.commerce.price();
    case 'category':
      return faker.commerce.department();
    case 'description':
      return faker.commerce.productDescription();
    case 'creditCard':
      return faker.finance.creditCardNumber();
    case 'accountNumber':
      return faker.finance.accountNumber();
    case 'transactionType':
      return generateTransactionType();
    case 'department':
      return generateDepartment();
    case 'jobTitle':
      return generateJobTitle();
    case 'salary':
      return faker.number.int({ min: 30000, max: 150000 }).toString();
    case 'diagnosis':
      return generateDiagnosis();
    case 'medication':
      return generateMedication();
    case 'bloodType':
      return generateBloodType();
    case 'courseCode':
      return generateCourseCode();
    case 'grade':
      return generateGrade();
    default:
      return '';
  }
};

export const generateData = (fields: Field[], count: number) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    const item: Record<string, any> = {};
    fields.forEach((field) => {
      item[field.name] = generateValue(field);
    });
    data.push(item);
  }
  return data;
};