import React from 'react';

interface DescriptionTextProps {
  text: string;
}

const DescriptionText: React.FC<DescriptionTextProps> = ({ text }) => (
  <p className="text-sm text-gray-700">
    {text}
  </p>
);

export default DescriptionText;
