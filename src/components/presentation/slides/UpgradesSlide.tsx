import { PresentationSlide } from '../PresentationSlide';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const UpgradesSlide = () => {
  const upgrades = [
    { from: 'Node v14.17.0', to: 'v22.14.0' },
    { from: 'React 17', to: 'React 19' },
    { from: 'Webpack', to: 'Vite' },
    { from: 'Jest', to: 'Vitest' },
    { from: 'Enzyme', to: 'React Testing Library' },
  ];

  const additionalUpgrades = [
    'Secrets moved to environment variables (out of git tracking)',
    'Many other packages updated to latest versions'
  ];

  return (
    <PresentationSlide>
      <div className="text-center">
        <h2 className="presentation-heading">Upgrades Implemented</h2>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {upgrades.map((upgrade, index) => (
            <div key={index} className="flex items-center justify-center gap-4 p-4 bg-presentation-light rounded-lg">
              <CheckCircle className="checkmark" />
              <span className="presentation-text font-medium">{upgrade.from}</span>
              <ArrowRight className="upgrade-arrow" />
              <span className="presentation-text presentation-highlight font-bold">{upgrade.to}</span>
            </div>
          ))}
          
          <div className="mt-8 space-y-4">
            {additionalUpgrades.map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-4 p-4 bg-presentation-light rounded-lg">
                <CheckCircle className="checkmark" />
                <span className="presentation-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};