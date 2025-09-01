import { PresentationSlide } from '../PresentationSlide';
import { Sparkles, MessageCircle } from 'lucide-react';

export const ClosingSlide = () => {
  return (
    <PresentationSlide>
      <div className="text-center">
        <div className="mb-12">
          <Sparkles className="w-20 h-20 text-presentation-accent mx-auto mb-6" />
          <h2 className="presentation-title text-5xl mb-6">
            "Upgraded for speed, stability, and scalability."
          </h2>
        </div>
        
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="bg-presentation-light p-8 rounded-xl">
            <h3 className="presentation-subheading mb-4">Project Lead</h3>
            <p className="presentation-text text-2xl font-semibold">
              Hamsa Vardhan Darapureddi
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-4 p-6 bg-presentation-accent rounded-xl text-white">
            <MessageCircle className="w-8 h-8" />
            <h3 className="text-2xl font-semibold">Questions?</h3>
          </div>
        </div>
        
        <p className="presentation-text presentation-muted mt-8">
          Thank you for your attention
        </p>
      </div>
    </PresentationSlide>
  );
};