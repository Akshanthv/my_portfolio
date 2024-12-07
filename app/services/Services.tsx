import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Project Management',
    imageSrc: 'https://hillconstructioncompany.com/templates/yootheme/cache/bc/Approach_top_2022-bcf1c91e.webp',
    description: 'We provide excellent project management services...',
    features: ["ARCHITECT SELECTION",
      "CONCEPTUAL ESTIMATE",
      "REGULATORY APPROVALS",
      "PLANNING SUPPORT"],
    // bgColor: '#FFB6C1', 
  },
  {
    title: 'CONSTRUCTION',
    imageSrc: 'https://plus.unsplash.com/premium_photo-1682724602925-f0264b85953f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D',
    description: 'Our general contracting ensures top-quality execution...',
    features: ["ONSITE SUPERVISION & TRADE COORDINATION",
"SCHEDULE IMPLEMENTATION/CONTROL",
"COST CONTROL",
"SHOP DRAWING & SAMPLE REVIEW/APPROVAL",
"DETAILED INVOICING",
"INSPECTION & QUALITY ASSURANCE",
"SAFETY",
"SITE DOCUMENTATION",
"INFORMATION CONTROL & REPORTING"],
    // bgColor: '#ADD8E6', 
  },
  {
    title: 'Space Planning',
    imageSrc: 'https://i0.wp.com/www.centric-office.co.uk/wp-content/uploads/2024/09/space-planning-1.jpg?ssl=1',
    description: 'Optimize your spaces with our advanced planning solutions...',
    features: ['Efficient space utilization', 'Modern design concepts', 'Client-focused solutions'],
    // bgColor: '#90EE90', 
  },
  {
    title: 'Interior Design',
    imageSrc: 'https://www.artemisiacollege.com/wp-content/uploads/2020/01/INTERIOR-DESIGN.jpg',
    description: 'Creative interior design solutions tailored to your needs...',
    features: ['Personalized designs', 'High-quality materials', 'Attention to detail'],
  },
  {
    title: 'POSTCONSTRUCTION',
    imageSrc: 'https://hillconstructioncompany.com/templates/yootheme/cache/9e/approach-pre-construction-9e889e99.webp',
    description: 'Expert consulting to help you achieve your goals...',
    features: ['GENERAL INFORMATION ASSISTANCE',
'MAINTENANCE PLAN'],
  },
];

const Services = () => {
  return (
    <div id="services" className="min-h-screen  text-black flex flex-col items-center p-8">
      {/* bg-gray-900  */}
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <div className="w-full overflow-x-auto pb-4">
        <div className="flex space-x-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              imageSrc={service.imageSrc}
              description={service.description}
              features={service.features}
              bgColor={service.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
