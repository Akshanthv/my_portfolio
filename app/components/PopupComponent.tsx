// import React, { FC } from "react";

// interface PopupComponentProps {
//   onClose: () => void;
//   images: string[];
//   strings: string[];
// }

// const PopupComponent: FC<PopupComponentProps> = ({ onClose, images, strings }) => (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//     <div className="bg-white w-3/4 max-w-4xl p-6 rounded-lg shadow-lg">
//       <button
//         onClick={onClose}
//         className="bg-red-500 text-white px-4 py-2 rounded-full self-end mb-4"
//       >
//         Close
//       </button>
//       <div className="flex space-x-6">
//         {/* Left: Scrollable images */}
//         <div className="w-1/2 overflow-y-scroll h-96 border border-gray-300 p-4">
//           {images.map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`Image ${index + 1}`}
//               className="w-full mb-4 rounded-md"
//             />
//           ))}
//         </div>
//         {/* Right: List of strings */}
//         <div className="w-1/2 border border-gray-300 p-4">
//           <ul>
//             {strings.map((string, index) => (
//               <li key={index} className="mb-2 text-lg text-gray-700">
//                 {string}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default PopupComponent;
