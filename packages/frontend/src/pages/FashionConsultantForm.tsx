import React from 'react';
import CompanyLogo from '../assets/company_logo.webp';
import { useForm } from '../hooks/useForm';
import Button from '../components/button/button';
import { FormField } from '../types/formTypes';

const questions = [
  { id: 'name', label: "What’s your name?" },
  { id: 'ageFeeling', label: "How old are you feeling today?" },
  { id: 'gender', label: "How do you identify?" },
  { id: 'stylePreference', label: "If your style were an ice cream flavor, what would it be?" },
  { id: 'fit', label: "How do you like your clothes to fit?" },
  { id: 'budget', label: "What’s your budget range?" }
];

const FashionConsultantForm: React.FC = () => {
  const { formData, handleChange, handleSubmit, isLoading } = useForm();

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
          {questions.map(({ id, label }) => (
            <div className="flex flex-col" key={id}>
              <label htmlFor={id} className="text-sm font-bold text-gray-700 mb-1 text-left">{label}</label>
              <input
                type="text"
                id={id}
                name={id}
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                value={formData[id as FormField] || ''}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <Button
            isLoading={isLoading}
            buttonDescription={'Submit'}
            className={"text-white bg-[#2D2D3E] hover:bg-[#B0D81D] font-semibold rounded-md text-sm px-4 py-2.5 w-full"} />
        </form>
      </div>
    </div>
  );
};

export default FashionConsultantForm;


// import React from 'react';
// import CompanyLogo from '../assets/company_logo.webp';
// import { useForm } from '../hooks/useForm';
// import Button from '../components/button/button';

// const questions = [
//   { id: 'name', label: "What’s your name?" },
//   { id: 'ageFeeling', label: "How old are you feeling today?" },
//   { id: 'gender', label: "How do you identify?" },
//   { id: 'stylePreference', label: "If your style were an ice cream flavor, what would it be?" },
//   { id: 'fit', label: "How do you like your clothes to fit?" },
//   { id: 'budget', label: "What’s your budget range?" }
// ];

// type FormField = 'name' | 'ageFeeling' | 'gender' | 'stylePreference' | 'fit' | 'budget';
// const formDataId: FormField = 'name'; // Example, you would use the actual id logic here


// const FashionConsultantForm: React.FC = () => {
//   const { formData, handleChange, handleSubmit, isLoading } = useForm();

//   return (
//     <div className="my-6">
//       <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-[#c6f221] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
//         <div className="flex flex-col items-start">
//           <img
//             src={CompanyLogo}
//             alt="Company Logo"
//             className="mb-6"
//           />
//           <h1 className="text-3xl font-extrabold mb-4">AI Fashion Consultant</h1>
//           <p className="text-sm text-gray-700">
//             Help us understand your unique style by completing this quick survey! Your answers will help us put together a personalised outfit that perfectly matches your vibe. In just a few seconds, our AI will generate an outfit that matches your vibe!
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {questions.map(({ id, label }) => (
//             <div className="flex flex-col" key={id}>
//               <label htmlFor={id} className="text-sm font-bold text-gray-700 mb-1 text-left">{label}</label>
//               <input
//                 type="text"
//                 id={id}
//                 name={id}
//                 className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
//                 value={formData[id]<formDataId> || ''} // Default to an empty string if undefined
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           ))}
//           <Button
//             isLoading={isLoading}
//             buttonDescription={'Submit'}
//             className={"text-white bg-[#2D2D3E] hover:bg-[#B0D81D] font-semibold rounded-md text-sm px-4 py-2.5 w-full"} />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FashionConsultantForm;



// import React from 'react';
// import CompanyLogo from '../assets/company_logo.webp';
// import { useForm } from '../hooks/useForm';
// import Button from '../components/button/button';

// const FashionConsultantForm: React.FC = () => {
// const { formData, handleChange, handleSubmit, isLoading } = useForm();

// return (
// <div className="my-6">
//   <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-[#c6f221] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
//     <div className="flex flex-col items-start">
//       <img
//         src={CompanyLogo}
//         alt="Company Logo"
//         className="mb-6"
//       />
//       <h1 className="text-3xl font-extrabold mb-4">AI Fashion Consultant</h1>
//       <p className="text-sm text-gray-700">
//         Help us understand your unique style by completing this quick survey! Your answers will help us put together a personalised outfit that perfectly matches your vibe. In just a few seconds, our AI will generate an outfit that matches your vibe!
//       </p>
//     </div>

//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div className="flex flex-col">
//         <label htmlFor="name" className="text-sm font-bold text-gray-700 mb-1 text-left">What’s your name?</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="ageFeeling" className="text-sm font-bold text-gray-700 mb-1 text-left">How old are you feeling today?</label>
//         <input
//           type="text"
//           id="ageFeeling"
//           name="ageFeeling"
//           className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
//           value={formData.ageFeeling}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="gender" className="text-sm font-bold text-gray-700 mb-1 text-left">How do you identify?</label>
//         <input
//           type="text"
//           id="gender"
//           name="gender"
//           className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
//           value={formData.gender}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="stylePreference" className="text-sm font-bold text-gray-700 mb-1 text-left">If your style were an ice cream flavor, what would it be?</label>
//         <input
//           type="text"
//           id="stylePreference"
//           name="stylePreference"
//           className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
//           value={formData.stylePreference}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="fit" className="text-sm font-bold text-gray-700 mb-1 text-left">How do you like your clothes to fit?</label>
//         <input
//           type="text"
//           id="fit"
//           name="fit"
//           className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
//           value={formData.fit}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="budget" className="text-sm font-bold text-gray-700 mb-1 text-left">What’s your budget range?</label>
//         <input
//           type="text"
//           id="budget"
//           name="budget"
//           className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
//           value={formData.budget}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <Button
//         isLoading={isLoading}
//         buttonDescription={'Submit'}
//         className={"text-white bg-[#2D2D3E] hover:bg-[#B0D81D] font-semibold rounded-md text-sm px-4 py-2.5 w-full"} />
//     </form>
//   </div>
// </div>
// );
// };

// export default FashionConsultantForm;