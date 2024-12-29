export type FieldType =
  | 'string' | 'number' | 'boolean' | 'date'
  // Personal
  | 'name' | 'firstName' | 'lastName' | 'email' | 'phone' | 'address'
  | 'city' | 'state' | 'country' | 'zipCode' | 'username' | 'password'
  | 'avatar' | 'dateOfBirth' | 'ssn' | 'nationality' | 'occupation'
  // Business
  | 'company' | 'department' | 'jobTitle' | 'salary' | 'employeeId'
  | 'businessEmail' | 'officePhone' | 'companySize' | 'industry'
  | 'creditCard' | 'accountNumber' | 'transactionType' | 'currency'
  // Medical
  | 'diagnosis' | 'medication' | 'bloodType' | 'height' | 'weight'
  | 'bloodPressure' | 'temperature' | 'pulseRate' | 'symptoms'
  // Education
  | 'courseCode' | 'grade' | 'gpa' | 'major' | 'degree'
  | 'university' | 'studentId' | 'graduationYear' | 'credits'
  // E-commerce
  | 'product' | 'price' | 'category' | 'description' | 'sku'
  | 'brand' | 'color' | 'size' | 'weight' | 'stockQuantity'
  | 'rating' | 'reviews' | 'discount' | 'shippingMethod';

export interface Field {
  name: string;
  type: FieldType;
  min?: number;
  max?: number;
}

export interface GeneratorSchema {
  fields: Field[];
  count: number;
  domain: string;
}

export interface Template {
  name: string;
  description: string;
  fields: Field[];
}