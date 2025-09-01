import { PresentationSlide } from '../PresentationSlide';
import { Code, Package, Layers } from 'lucide-react';

export const TechnicalJargonSlide = () => {
  const terms = [
    {
      term: 'SCSS/SASS',
      definition: 'Preprocessor for CSS that adds variables, nesting, etc.',
      icon: Code
    },
    {
      term: 'Library',
      definition: 'A reusable set of code functionalities.',
      icon: Package
    },
    {
      term: 'Module Bundler',
      definition: 'A tool that combines many code files into optimized bundles for the browser.',
      icon: Layers
    }
  ];

  return (
    <PresentationSlide>
      <div className="text-center">
        <h2 className="presentation-heading">Technical Jargons Explained</h2>
        <p className="presentation-text presentation-muted mb-12">For non-technical audience</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {terms.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-presentation-light p-8 rounded-xl text-center">
                <IconComponent className="w-16 h-16 text-presentation-accent mx-auto mb-6" />
                <h3 className="presentation-subheading text-xl mb-4">{item.term}</h3>
                <p className="presentation-text text-base leading-relaxed">{item.definition}</p>
              </div>
            );
          })}
        </div>
      </div>
    </PresentationSlide>
  );
};