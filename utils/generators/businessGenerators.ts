import { faker } from '@faker-js/faker';
import type { Field } from '../../types/schema';

export const generateBusinessData: Record<string, (field: Field) => any> = {
  company: () => faker.company.name(),
  department: () => faker.helpers.arrayElement([
    'Engineering', 'Marketing', 'Sales', 'HR', 'Finance',
    'Customer Support', 'Operations', 'Research', 'Legal',
    'Product', 'Design', 'Quality Assurance'
  ]),
  jobTitle: () => faker.person.jobTitle(),
  salary: () => faker.number.int({ min: 30000, max: 200000 }).toString(),
  employeeId: () => faker.string.alphanumeric(8).toUpperCase(),
  businessEmail: () => faker.internet.email(),
  officePhone: () => faker.phone.number(),
  department: () => faker.commerce.department(),
  companySize: () => faker.helpers.arrayElement(['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+']),
  industry: () => faker.company.catchPhrase(),
  creditCard: () => faker.finance.creditCardNumber(),
  accountNumber: () => faker.finance.accountNumber(),
  transactionType: () => faker.helpers.arrayElement([
    'Purchase', 'Refund', 'Deposit', 'Withdrawal', 'Transfer',
    'Payment', 'Credit', 'Debit', 'Investment', 'Dividend'
  ]),
  currency: () => faker.finance.currencyCode(),
};