import { useState } from 'react';
import { TitleSlide } from './slides/TitleSlide';
import { GoalSlide } from './slides/GoalSlide';
import { UpgradesSlide } from './slides/UpgradesSlide';
import { TechnicalJargonSlide } from './slides/TechnicalJargonSlide';
import { HurdlesSlide } from './slides/HurdlesSlide';
import { MetricsSlide } from './slides/MetricsSlide';
import { NextStepsSlide } from './slides/NextStepsSlide';
import { ClosingSlide } from './slides/ClosingSlide';
import { PresentationNavigation } from './PresentationNavigation';

const slides = [
  TitleSlide,
  GoalSlide,
  UpgradesSlide,
  TechnicalJargonSlide,
  HurdlesSlide,
  MetricsSlide,
  NextStepsSlide,
  ClosingSlide,
];

export const NodeUpgradePresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative bg-presentation-bg min-h-screen">
      <CurrentSlideComponent />
      
      <PresentationNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrevious={previousSlide}
      />
    </div>
  );
};