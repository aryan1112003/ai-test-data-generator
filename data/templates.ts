import { Template } from '../types/schema';

export const domainTemplates: Template[] = [
  {
    name: 'E-commerce',
    description: 'Product catalog and order data',
    fields: [
      { name: 'productId', type: 'string' },
      { name: 'productName', type: 'product' },
      { name: 'price', type: 'price' },
      { name: 'category', type: 'category' },
      { name: 'description', type: 'description' },
      { name: 'inStock', type: 'boolean' },
      { name: 'rating', type: 'number', min: 1, max: 5 }
    ]
  },
  {
    name: 'Healthcare',
    description: 'Patient and medical records',
    fields: [
      { name: 'patientId', type: 'string' },
      { name: 'patientName', type: 'name' },
      { name: 'diagnosis', type: 'diagnosis' },
      { name: 'medication', type: 'medication' },
      { name: 'bloodType', type: 'bloodType' },
      { name: 'admissionDate', type: 'date' }
    ]
  },
  {
    name: 'Banking',
    description: 'Financial and transaction data',
    fields: [
      { name: 'accountId', type: 'accountNumber' },
      { name: 'customerName', type: 'name' },
      { name: 'transactionType', type: 'transactionType' },
      { name: 'amount', type: 'price' },
      { name: 'cardNumber', type: 'creditCard' },
      { name: 'transactionDate', type: 'date' }
    ]
  },
  {
    name: 'Education',
    description: 'Student and course records',
    fields: [
      { name: 'studentId', type: 'string' },
      { name: 'studentName', type: 'name' },
      { name: 'courseCode', type: 'courseCode' },
      { name: 'grade', type: 'grade' },
      { name: 'email', type: 'email' },
      { name: 'enrollmentDate', type: 'date' }
    ]
  },
  {
    name: 'HR',
    description: 'Employee and company data',
    fields: [
      { name: 'employeeId', type: 'string' },
      { name: 'fullName', type: 'name' },
      { name: 'department', type: 'department' },
      { name: 'jobTitle', type: 'jobTitle' },
      { name: 'email', type: 'email' },
      { name: 'salary', type: 'salary' },
      { name: 'startDate', type: 'date' }
    ]
  }
];