import React from 'react';
import './Services.css';

const serviceList = [
  {
    title: 'UI/UX Design',
    description: 'Designing user-friendly and modern interfaces.',
    icon: '🎨',
  },
  {
    title: 'Web Development',
    description: 'Building responsive and interactive websites using React.',
    icon: '💻',
  },
  {
    title: 'Responsive Design',
    description: 'Ensuring seamless experience across devices.',
    icon: '📱',
  },
];
const Services = () => {
  return (
    <div className="services-section">
      <h2>My Services</h2>
      <div className="services-container">
        {serviceList.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;