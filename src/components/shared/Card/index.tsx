import { ReactNode } from 'react';

interface CardProps {
  reverse?: boolean;
  children: ReactNode;
}

const Card = ({ reverse = false, children }: CardProps) => {
  return (
    <div className={`card ${reverse ? 'reverse' : ''}`.trim()}>{children}</div>
  );
};

export default Card;
