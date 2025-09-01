import { PresentationSlide } from '../PresentationSlide';
import techIllustration from '@/assets/tech-hero-illustration.jpg';

export const TitleSlide = () => {
  return (
    <PresentationSlide>
      <div className="text-center">
        <div className="mb-8">
          <img 
            src={techIllustration} 
            alt="Tech illustration" 
            className="w-64 h-48 mx-auto object-contain mb-8"
          />
        </div>
        <h1 className="presentation-title">
          Node Upgrade Project
        </h1>
        <p className="presentation-subtitle">
          Modernizing the Frontend Tech Stack
        </p>
      </div>
    </PresentationSlide>
  );
};