export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};


// Example:

// import { uuid } from "../utils/uuid";

// const services = [
//   { name: "Starter Package", price: 499 },
//   { name: "Small Business", price: 899 },
//   { name: "Pro Business", price: 1499 }
// ];

// const Services = () => {
//   return (
//     <div>
//       {services.map(service => (
//         <div key={uuid()}>
//           <h3>{service.name}</h3>
//           <p>Price: ${service.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };