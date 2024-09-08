export type FormField = 'name' | 'ageFeeling' | 'gender' | 'stylePreference' | 'fit' | 'budget';

export interface FormData {
    name: string;
    ageFeeling: string;
    gender: string;
    stylePreference: string;
    fit: string;
    budget: string;
  }

export interface UseFormOptions {
    initialFormData?: FormData;
}