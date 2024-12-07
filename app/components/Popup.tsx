import React from 'react';
import IProject from './IProject';

interface IPopupProps {
  project: IProject | null;
  onClose: () => void;
}

const Popup: React.FC<IPopupProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] md:w-[70%] h-[80%] p-5 rounded-lg shadow-lg flex overflow-hidden">
        
        <div className="w-1/2 overflow-y-scroll flex flex-col space-y-4 pr-2">
          {project.image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Project Image ${index + 1}`}
              className="w-full h-auto object-cover rounded-md"
            />
          ))}
        </div>

        <div className="w-1/2 p-5 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
          <p className="text-lg mb-4">{project.text}</p>

          <ul className="list-disc ml-5 space-y-2">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <button
            onClick={onClose}
            className="mt-auto bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
