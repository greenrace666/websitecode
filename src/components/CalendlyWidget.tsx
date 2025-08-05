import React, { useEffect } from 'react';

const CalendlyWidget: React.FC = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="mt-8">
      <h4 className="font-semibold mb-4">Schedule a Meeting</h4>
      <div className="calendly-inline-widget" 
           data-url="https://calendly.com/nikilkrishna66/30min?hide_gdpr_banner=1&hide_event_type_details=1" 
           style={{ minWidth: '320px', height: '600px' }}>
      </div>
    </div>
  );
};

export default CalendlyWidget; 