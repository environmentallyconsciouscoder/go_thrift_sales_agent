import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFashionContext } from '../context/FashionContext';
import Button from '../components/Button/Button';
import CompanyLogo from '../components/Logo/Logo';
import Header from '../components/Header/Header';
import DescriptionText from '../components/DescriptionText/DescriptionText';
import FormInput from '../components/FormInput/FormInput';
import ItemsTable from '../components/ItemsTable/ItemsTable';

const Dashboard: React.FC = () => {
  const { recommendations } = useFashionContext();
  const navigate = useNavigate();
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (recommendations) {
      setLoading(false);
    } else {
      setError('No recommendations available. Please try again later.');
      setLoading(false);
    }
  }, [recommendations]);

  const filteredItems = (recommendations?.style || []).filter((item) => {
    const price = parseFloat(item.price.replace('£', ''));
    return price <= maxPrice;
  });

  const handleTryAgain = () => {
    navigate('/');
  };

  return (
    <div className="bg-[#c6f221] my-6 px-4 flex flex-col items-center">
      <div className="flex flex-col items-center p-6 mx-auto max-w-4xl rounded-md text-[#333] font-[sans-serif] w-full">
        <div className="flex flex-col items-center w-full mb-6">
          <CompanyLogo className="w-40 h-auto" />
          <Header />
          {loading && <div className="mt-6">
            <p>Loading your recommendations...</p>
          </div>}
        </div>
        <div className="flex flex-col w-full">
          <h2 className="text-xl font-semibold mb-4 text-center">Your Recommendations</h2>
          {error ? (
            <div className="text-red-600 text-center mb-4">{error}</div>
          ) : (
            <>
              <div className="p-4 mb-6 w-full">
                <DescriptionText text={recommendations?.description || ''} />
              </div>
              <div className="w-full max-w-md mb-4 px-4">
                <FormInput
                  id="maxPrice"
                  label="Max Price (£)"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  type="number"
                  min={0}
                />
              </div>
              <div className="w-full">
                <ItemsTable items={filteredItems} />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="pb-4">
        <Button
          onClick={handleTryAgain}
          buttonDescription={'Try Again'}
          className="text-white bg-[#2D2D3E] hover:bg-[#B0D81D] font-semibold rounded-md text-sm px-4 py-2.5"
        />
      </div>
    </div>
  );
};

export default Dashboard;