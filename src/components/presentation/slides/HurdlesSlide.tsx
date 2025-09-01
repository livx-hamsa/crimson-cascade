import { PresentationSlide } from '../PresentationSlide';
import { AlertTriangle, CheckCircle } from 'lucide-react';

export const HurdlesSlide = () => {
  const challenges = [
    {
      challenge: 'Migrated from node-sass (deprecated)',
      solution: 'sass'
    },
    {
      challenge: 'Upgraded Bulma',
      solution: 'underlying structure changes'
    },
    {
      challenge: 'Replaced 8-year unmaintained Autocomplete library',
      solution: 'custom-patched solution'
    },
    {
      challenge: 'Replaced unmaintained Excel generation library',
      solution: 'SheetJS'
    },
    {
      challenge: 'Major effort converting unit tests to RTL',
      solution: 'Enzyme unsupported'
    }
  ];

  return (
    <PresentationSlide>
      <div className="text-center">
        <h2 className="presentation-heading">Hurdles Faced</h2>
        
        <div className="space-y-6 max-w-5xl mx-auto">
          {challenges.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-presentation-light rounded-xl">
              <div className="flex items-center gap-4">
                <AlertTriangle className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-semibold text-presentation-text mb-1">Challenge</h4>
                  <p className="presentation-text text-base">{item.challenge}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-semibold presentation-highlight mb-1">Solution</h4>
                  <p className="presentation-text text-base">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PresentationSlide>
  );
};