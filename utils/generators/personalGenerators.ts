import { faker } from '@faker-js/faker';
import type { Field } from '../../types/schema';

export const generatePersonalData: Record<string, (field: Field) => any> = {
  name: () => faker.person.fullName(),
  firstName: () => faker.person.firstName(),
  lastName: () => faker.person.lastName(),
  email: () => faker.internet.email(),
  phone: () => faker.phone.number(),
  address: () => faker.location.streetAddress(),
  city: () => faker.location.city(),
  state: () => faker.location.state(),
  country: () => faker.location.country(),
  zipCode: () => faker.location.zipCode(),
  username: () => faker.internet.userName(),
  password: () => faker.internet.password(),
  avatar: () => faker.image.avatar(),
  dateOfBirth: () => faker.date.birthdate(),
  ssn: () => faker.string.numeric(9),
  nationality: () => faker.location.country(),
  occupation: () => faker.person.jobTitle(),
};