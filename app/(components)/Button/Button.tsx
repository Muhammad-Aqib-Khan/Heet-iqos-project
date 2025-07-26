import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  text: string;
  href: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, href, className = '' }) => {
  return (
    <Link
      href={href}
      className={`inline-block transition duration-300 transform hover:scale-110 ${className}`}
    >
      {text}
    </Link>
  );
};

export default Button;
