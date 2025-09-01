import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PresentationNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const PresentationNavigation = ({ 
  currentSlide, 
  totalSlides, 
  onPrevious, 
  onNext 
}: PresentationNavigationProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-sm border border-presentation-accent/20 rounded-full px-6 py-3 shadow-lg">
      <Button
        variant="ghost"
        size="sm"
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="text-presentation-accent hover:bg-presentation-accent/10 disabled:opacity-40"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSlides }, (_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-presentation-accent' : 'bg-presentation-muted/40'
            }`}
          />
        ))}
      </div>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="text-presentation-accent hover:bg-presentation-accent/10 disabled:opacity-40"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
      
      <div className="ml-4 text-sm text-presentation-muted font-medium">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
};