import { PresentationSlide } from '../PresentationSlide';
import { Calendar, RefreshCw, Wrench } from 'lucide-react';

export const NextStepsSlide = () => {
  const steps = [
    {
      title: 'Update old Auth0 integration',
      icon: RefreshCw,
      timeline: 'Q1 2024'
    },
    {
      title: 'Update libraries like moment/moment-timezone, pdfmake',
      icon: Wrench,
      timeline: 'Q2 2024'
    },
    {
      title: 'Allocate maintenance every 2 years',
      icon: Calendar,
      timeline: 'Ongoing'
    }
  ];

  return (
    <PresentationSlide>
      <div className="text-center">
        <h2 className="presentation-heading">Next Steps</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-presentation-accent/20 hidden md:block"></div>
            
            <div className="space-y-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="relative flex items-center">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-presentation-accent rounded-full border-4 border-white hidden md:block"></div>
                    
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      {index % 2 === 0 ? (
                        <>
                          <div className="md:text-right">
                            <div className="bg-presentation-light p-6 rounded-xl">
                              <IconComponent className="w-8 h-8 text-presentation-accent mb-4 md:ml-auto" />
                              <h3 className="presentation-text font-semibold mb-2">{step.title}</h3>
                              <span className="text-sm presentation-highlight font-medium">{step.timeline}</span>
                            </div>
                          </div>
                          <div className="md:block hidden"></div>
                        </>
                      ) : (
                        <>
                          <div className="md:block hidden"></div>
                          <div className="md:text-left">
                            <div className="bg-presentation-light p-6 rounded-xl">
                              <IconComponent className="w-8 h-8 text-presentation-accent mb-4" />
                              <h3 className="presentation-text font-semibold mb-2">{step.title}</h3>
                              <span className="text-sm presentation-highlight font-medium">{step.timeline}</span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};