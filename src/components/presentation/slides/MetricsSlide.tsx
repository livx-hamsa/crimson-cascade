import { PresentationSlide } from '../PresentationSlide';
import { TrendingDown, Clock, Zap, HardDrive } from 'lucide-react';

export const MetricsSlide = () => {
  const metrics = [
    {
      label: 'Dev Build',
      before: '1m32s',
      after: '30s',
      icon: Clock,
      improvement: '70% faster'
    },
    {
      label: 'File Change Refresh',
      before: '20s',
      after: '~0s',
      icon: Zap,
      improvement: 'Instant'
    },
    {
      label: 'Test Environment Build',
      before: '~3m',
      after: '~1m',
      icon: Clock,
      improvement: '67% faster'
    },
    {
      label: 'Prod Build',
      before: '4m30s',
      after: '45s',
      icon: Clock,
      improvement: '83% faster'
    },
    {
      label: 'Build Folder Size',
      before: '12.7MB',
      after: '8.8MB',
      icon: HardDrive,
      improvement: '31% smaller'
    }
  ];

  return (
    <PresentationSlide>
      <div className="text-center">
        <h2 className="presentation-heading">Metrics: Before vs After</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="bg-presentation-light p-6 rounded-xl">
                <IconComponent className="w-12 h-12 text-presentation-accent mx-auto mb-4" />
                <h3 className="presentation-text font-semibold mb-4">{metric.label}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-presentation-muted">Before:</span>
                    <span className="presentation-text font-medium">{metric.before}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-presentation-muted">After:</span>
                    <span className="presentation-metric text-lg">{metric.after}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-2 p-2 bg-green-50 rounded-lg">
                  <TrendingDown className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">{metric.improvement}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PresentationSlide>
  );
};