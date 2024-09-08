import React from 'react';

interface ButtonProps {
    buttonDescription: string;
    isLoading?: boolean;
    className: string;
    onClick?: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({
    buttonDescription,
    isLoading = false,
    className,
    onClick
}) => {
    return (
        <button className={className} onClick={onClick}>
            {isLoading ? "Generating" : buttonDescription}
        </button>
    );
}

export default ButtonComponent;
