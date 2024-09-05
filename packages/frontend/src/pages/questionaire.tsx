import React from 'react';
import CompanyLogo from '../assets/company_logo.webp';
import { useFashionConsultantForm } from '../hooks/useFashionConsultantForm'; // Adjust the path as necessary

const FashionConsultantForm: React.FC = () => {
  const { formData, handleChange, handleSubmit, isLoading } = useFashionConsultantForm();

  return (
    <div className="my-6">
      <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-[#c6f221] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
        <div className="flex flex-col items-start">
          <img
            src={CompanyLogo}
            alt="Company Logo"
            className="mb-6"
          />
          <h1 className="text-3xl font-extrabold mb-4">AI Fashion Consultant</h1>
          <p className="text-sm text-gray-700">
            Help us understand your unique style by completing this quick survey! Your answers will help us put together a personalised outfit that perfectly matches your vibe. In just a few seconds, our AI will generate an outfit that matches your vibe!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-bold text-gray-700 mb-1 text-left">What’s your name?</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="ageFeeling" className="text-sm font-bold text-gray-700 mb-1 text-left">How old are you feeling today?</label>
            <input
              type="text"
              id="ageFeeling"
              name="ageFeeling"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              value={formData.ageFeeling}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender" className="text-sm font-bold text-gray-700 mb-1 text-left">How do you identify?</label>
            <input
              type="text"
              id="gender"
              name="gender"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="stylePreference" className="text-sm font-bold text-gray-700 mb-1 text-left">If your style were an ice cream flavor, what would it be?</label>
            <input
              type="text"
              id="stylePreference"
              name="stylePreference"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              value={formData.stylePreference}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="fit" className="text-sm font-bold text-gray-700 mb-1 text-left">How do you like your clothes to fit?</label>
            <input
              type="text"
              id="fit"
              name="fit"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              value={formData.fit}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="budget" className="text-sm font-bold text-gray-700 mb-1 text-left">What’s your budget range?</label>
            <input
              type="text"
              id="budget"
              name="budget"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              value={formData.budget}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-[#2D2D3E] hover:bg-[#007bff] font-semibold rounded-md text-sm px-4 py-2.5 w-full"
          >
            {isLoading? "Generating": "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FashionConsultantForm;



// // src/components/FashionConsultantForm.jsx
// import React, { useState } from 'react';
// import CompanyLogo from '../assets/company_logo.webp';

// const FashionConsultantForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     ageFeeling: '',
//     gender: '',
//     stylePreference: '',
//     fit: '',
//     budget: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your submit logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="my-6">
//       <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-[#c6f221] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
//         <div className="flex flex-col items-start">
//           <img
//             src={CompanyLogo} // Placeholder for your company logo
//             alt="Company Logo"
//             className="mb-6"
//           />
//           <h1 className="text-3xl font-extrabold mb-4">AI Fashion Consultant</h1>
//           <p className="text-sm text-gray-700">
//             Help us understand your unique style by completing this quick survey! Your answers will help us put together a personalised outfit that perfectly matches your vibe. In just a few seconds, our AI will generate an outfit that matches your vibe!
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex flex-col">
//             <label htmlFor="name" className="text-sm font-bold text-gray-700 mb-1 text-left">What’s your name?</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="ageFeeling" className="text-sm font-bold text-gray-700 mb-1 text-left">How old are you feeling today?</label>
//             <input
//               type="text"
//               id="ageFeeling"
//               name="ageFeeling"
//               className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
//               value={formData.ageFeeling}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="gender" className="text-sm font-bold text-gray-700 mb-1 text-left">How do you identify?</label>
//             <input
//               type="text"
//               id="gender"
//               name="gender"
//               className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
//               value={formData.gender}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="stylePreference" className="text-sm font-bold text-gray-700 mb-1 text-left">If your style were an ice cream flavor, what would it be?</label>
//             <input
//               type="text"
//               id="stylePreference"
//               name="stylePreference"
//               className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
//               value={formData.stylePreference}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="fit" className="text-sm font-bold text-gray-700 mb-1 text-left">How do you like your clothes to fit?</label>
//             <input
//               type="text"
//               id="fit"
//               name="fit"
//               className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
//               value={formData.fit}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="budget" className="text-sm font-bold text-gray-700 mb-1 text-left">What’s your budget range?</label>
//             <input
//               type="text"
//               id="budget"
//               name="budget"
//               className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
//               value={formData.budget}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="text-white bg-[#2D2D3E] hover:bg-[#007bff] font-semibold rounded-md text-sm px-4 py-2.5 w-full"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FashionConsultantForm;





// // src/components/FashionConsultantForm.jsx
// import React, { useState } from 'react';

// const FashionConsultantForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     ageFeeling: '',
//     gender: '',
//     stylePreference: '',
//     fit: '',
//     budget: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your submit logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold text-center mb-4">Fashion Consultant AI</h1>
//       <p className="text-gray-600 text-center mb-6">
//         Help us understand your style preferences better by filling out this short survey.
//       </p>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-gray-700">Personal Details</label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             placeholder="What’s your name?"
//             className="w-full mt-1 p-2 border border-gray-300 rounded"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             id="ageFeeling"
//             name="ageFeeling"
//             type="text"
//             placeholder="How old are you feeling today?"
//             className="w-full mt-2 p-2 border border-gray-300 rounded"
//             value={formData.ageFeeling}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="gender" className="block text-gray-700">Gender</label>
//           <input
//             id="gender"
//             name="gender"
//             type="text"
//             placeholder="How do you identify?"
//             className="w-full mt-1 p-2 border border-gray-300 rounded"
//             value={formData.gender}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="stylePreference" className="block text-gray-700">Style Preference</label>
//           <input
//             id="stylePreference"
//             name="stylePreference"
//             type="text"
//             placeholder="If your style were an ice cream flavor, what would it be?"
//             className="w-full mt-1 p-2 border border-gray-300 rounded"
//             value={formData.stylePreference}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="fit" className="block text-gray-700">Fit and Budget</label>
//           <input
//             id="fit"
//             name="fit"
//             type="text"
//             placeholder="How do you like your clothes to fit?"
//             className="w-full mt-1 p-2 border border-gray-300 rounded"
//             value={formData.fit}
//             onChange={handleChange}
//             required
//           />
//           <input
//             id="budget"
//             name="budget"
//             type="text"
//             placeholder="What’s your budget range?"
//             className="w-full mt-2 p-2 border border-gray-300 rounded"
//             value={formData.budget}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FashionConsultantForm;