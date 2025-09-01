import { PresentationSlide } from '../PresentationSlide';
import { Target, Zap } from 'lucide-react';

export const GoalSlide = () => {
  return (
    <PresentationSlide>
      <div className="text-center">
        <h2 className="presentation-heading">Goal for the Project</h2>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-6 p-6 bg-presentation-light rounded-xl">
            <Target className="w-12 h-12 text-presentation-accent flex-shrink-0" />
            <p className="presentation-text text-left">
              <span className="presentation-highlight">Unblock integrations</span> of new tools
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-6 p-6 bg-presentation-light rounded-xl">
            <Zap className="w-12 h-12 text-presentation-accent flex-shrink-0" />
            <p className="presentation-text text-left">
              <span className="presentation-highlight">Upgrade system</span> to latest versions for easier adoption of new functionalities
            </p>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};