import { faker } from '@faker-js/faker';
import type { Field } from '../../types/schema';

export const generateMedicalData: Record<string, (field: Field) => any> = {
  diagnosis: () => faker.helpers.arrayElement([
    'Hypertension', 'Type 2 Diabetes', 'Asthma', 'Migraine',
    'Arthritis', 'Anxiety Disorder', 'Depression', 'Influenza',
    'COVID-19', 'Bronchitis', 'Gastritis', 'Dermatitis',
    'Allergic Rhinitis', 'Insomnia', 'Lower Back Pain'
  ]),
  medication: () => faker.helpers.arrayElement([
    'Amoxicillin', 'Lisinopril', 'Metformin', 'Omeprazole',
    'Sertraline', 'Ibuprofen', 'Albuterol', 'Acetaminophen',
    'Losartan', 'Gabapentin', 'Metoprolol', 'Amlodipine',
    'Levothyroxine', 'Escitalopram', 'Atorvastatin'
  ]),
  bloodType: () => faker.helpers.arrayElement(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']),
  height: () => faker.number.int({ min: 150, max: 200 }),
  weight: () => faker.number.int({ min: 45, max: 120 }),
  bloodPressure: () => `${faker.number.int({ min: 90, max: 140 })}/${faker.number.int({ min: 60, max: 90 })}`,
  temperature: () => (faker.number.float({ min: 36.1, max: 37.2, precision: 0.1 })).toFixed(1),
  pulseRate: () => faker.number.int({ min: 60, max: 100 }),
  symptoms: () => faker.helpers.arrayElements([
    'Fever', 'Cough', 'Fatigue', 'Headache', 'Nausea',
    'Dizziness', 'Chest Pain', 'Shortness of Breath'
  ], { min: 1, max: 3 }),
};