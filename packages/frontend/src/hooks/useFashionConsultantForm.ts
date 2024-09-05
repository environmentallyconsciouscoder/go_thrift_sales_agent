import { useState } from 'react';
import { API } from 'aws-amplify';
import { useFashionContext } from '../context/FashionContext';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  ageFeeling: string;
  gender: string;
  stylePreference: string;
  fit: string;
  budget: string;
}

interface ApiResponse {
  result: string;
}

export function useFashionConsultantForm() {
  const { setRecommendations } = useFashionContext();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    ageFeeling: '',
    gender: '',
    stylePreference: '',
    fit: '',
    budget: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        gender: formData.gender,
        name: formData.name,
        age: formData.ageFeeling,
        stylePreference: formData.stylePreference,
        fitInformation: formData.fit,
        budgetRange: formData.budget,
      }).toString();

      const response: ApiResponse = await API.get('api', `/ai/recommendations?${params}`, {});
      const parsedResult = JSON.parse(response.result);
      setRecommendations(parsedResult);

      // Redirect to dashboard
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
