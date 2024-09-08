import React from 'react';
import CompanyLogo from '../../assets/company_logo.webp';

interface LogoComponentProps {
  className?: string;
}

const LogoComponent: React.FC<LogoComponentProps> = ({ className }) => {
  return (
    <img
      src={CompanyLogo}
      alt="Company Logo"
      className={`mb-6 ${className}`}
    />
  );
}

export default LogoComponent;
