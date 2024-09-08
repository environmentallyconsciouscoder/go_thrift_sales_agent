import { useState } from 'react';
import { API } from 'aws-amplify';
import { useFashionContext } from '../context/FashionContext';
import { useNavigate } from 'react-router-dom';
import { FormField, FormData, UseFormOptions } from '../types/formTypes';
import { RecommendationsResponse } from '../types/recommendationsTypes';


export function useForm(options: UseFormOptions = {}) {

  const { initialFormData = {
    name: '',
    ageFeeling: '',
    gender: '',
    stylePreference: '',
    fit: '',
    budget: ''
  }} = options;

  const { setRecommendations } = useFashionContext();
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name as FormField]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams(Object.entries(formData) as [string, string][]).toString();
      const response = await API.get('api', `/ai/recommendations?${params}`, {});
      const parsedResult: RecommendationsResponse = JSON.parse(response.result);
      setRecommendations(parsedResult);

      navigate('/dashboard');
    } catch (e) {
      setError('Failed to fetch recommendations');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    error,
  };
}