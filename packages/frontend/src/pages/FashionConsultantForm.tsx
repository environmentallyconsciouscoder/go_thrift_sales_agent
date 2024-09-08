import React from 'react';
import { useForm } from '../hooks/useForm';
import Button from '../components/Button/Button';
import CompanyLogo from '../components/Logo/Logo';
import Header from '../components/Header/Header';
import DescriptionText from '../components/DescriptionText/DescriptionText';
import { FormField } from '../types/formTypes';
import FormInput from '../components/FormInput/FormInput';

const questions = [
  { id: 'name', label: "What’s your name?" },
  { id: 'ageFeeling', label: "How old are you feeling today?" },
  { id: 'gender', label: "How do you identify?" },
  { id: 'stylePreference', label: "If your style were an ice cream flavor, what would it be?" },
  { id: 'fit', label: "How do you like your clothes to fit?" },
  { id: 'budget', label: "What’s your budget range?" }
];

const FashionConsultantForm: React.FC = () => {
  const { formData, handleChange, handleSubmit, isLoading } = useForm();

  return (
    <div className="my-6">
      <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-[#c6f221] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
        <div className="flex flex-col items-start">
          <CompanyLogo className="w-40 h-auto" />
          <Header />
          <DescriptionText
            text={"Help us understand your unique style by completing this quick survey! Your answers will help us put together a personalised outfit that perfectly matches your vibe. In just a few seconds, our AI will generate an outfit that matches your vibe!"}
          />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {questions.map(({ id, label }) => (
            <div className="flex flex-col" key={id}>
              <FormInput
                key={id}
                id={id}
                label={label}
                value={formData[id as FormField] || ''}
                onChange={handleChange}
                type="text"
              />
            </div>
          ))}
          <Button
            isLoading={isLoading}
            buttonDescription={'Submit'}
            className={"text-white bg-[#2D2D3E] hover:bg-[#B0D81D] font-semibold rounded-md text-sm px-4 py-2.5 w-full"}
          />
        </form>
      </div>
    </div>
  );
};

export default FashionConsultantForm;