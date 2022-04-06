import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  isDisabled?: boolean;
  type?: 'button' | 'submit';
  variant?: string;
}

const Button = ({
  children,
  isDisabled = false,
  type = 'button',
  variant = 'primary',
}: ButtonProps) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};

export default Button;
