import { ReactNode } from 'react';

interface PresentationSlideProps {
  children: ReactNode;
  className?: string;
}

export const PresentationSlide = ({ children, className = '' }: PresentationSlideProps) => {
  return (
    <div className={`presentation-slide slide-animation ${className}`}>
      <div className="w-full max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
};