import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CompanyLogo from '../assets/company_logo.webp';
import { useFashionContext } from '../context/FashionContext';

const Dashboard: React.FC = () => {
  const { recommendations } = useFashionContext();
  const navigate = useNavigate();

  // const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const items = {
    "description": "Hey James! I've curated a stylish outfit for you that fits perfectly within your budget. Check out this sleek white t-shirt from H&M, paired with classic blue jeans from Levi's. Complete the look with white Nike sneakers and a cream New Era baseball cap. Add a touch of elegance with a silver Casio watch. You're sure to rock this look!",
    "style": [
      { "type": "t-shirt", "brand": "H&M", "color": "white", "size": "S", "price": "£12" },
      { "type": "jeans", "brand": "Levi's", "color": "blue", "size": "28", "price": "£40" },
      { "type": "sneakers", "brand": "Nike", "color": "white", "size": "8", "price": "£50" },
      { "type": "baseball cap", "brand": "New Era", "color": "cream", "size": "One Size", "price": "£20" },
      { "type": "watch", "brand": "Casio", "color": "silver", "price": "£25", "link": "http://www.casio.com" }
    ]
  };

  // Filter items based on price
  const filteredItems = items.style.filter(item => {
    const price = parseFloat(item.price.replace('£', ''));
    return price <= maxPrice;
  });

  useEffect(() => {
    if (recommendations) {
      console.log('Recommendations:', recommendations);
      console.log("items", items);
    }
  }, [recommendations]);

  const handleTryAgain = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="bg-[#c6f221] my-6 px-4 sm:px-8">
      <div className="grid sm:grid-cols-2 items-start gap-8 p-6 mx-auto max-w-4xl rounded-md text-[#333] font-[sans-serif]">
        <div className="flex flex-col items-start">
          <img src={CompanyLogo} alt="Company Logo" className="mb-6" />
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-4">AI Fashion Consultant</h1>
        </div>
        <div className="flex flex-col pt-4">
          <h2 className="text-xl font-semibold mb-4">Your Recommendations</h2>
          <div className="p-4 mb-6">
            <p className="text-sm text-gray-700">{items.description}</p>
          </div>
          <div className="flex flex-col mb-6">
            {/* <label className="text-sm font-medium mb-2">Min Price (£)</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="p-2 border rounded"
              min="0"
            /> */}
            <label className="text-sm font-medium mt-1 mb-1">Max Price (£)</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="p-2 border rounded"
              min="0"
            />
          </div>
        </div>
      </div>

      <div className="p-4 rounded-md mt-6">
        <div className="overflow-x-auto bg-white rounded-md">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="p-2 text-left">Product</th>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Size</th>
                <th className="p-2 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-2">
                    <img src={item.image || "https://via.placeholder.com/100"} alt={item.type} className="w-16 h-16 object-cover rounded"/>
                  </td>
                  <td className="p-2">{item.brand}</td>
                  <td className="p-2">{item.size}</td>
                  <td className="p-2">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <button
            onClick={handleTryAgain}
            className="text-white bg-[#2D2D3E] hover:bg-[#007bff] font-semibold rounded-md text-sm px-4 py-2.5"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
