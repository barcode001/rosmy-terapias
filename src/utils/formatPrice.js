export const formatPrice = (amount, currency = "USD", locale = "en-US") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
  }).format(amount);
};




// How to use:

// import { formatPrice } from "../utils/formatPrice";

// const Services = () => {
//   const price = 499;

//   return (
//     <div>
//       <h2>Starter Package</h2>
//       <p>Price: {formatPrice(price)}</p>
//     </div>
//   );
// };


// 🔥 Bonus:
// 	•	You can pass different currencies if needed:

  // formatPrice(499, "MXN", "es-MX")  // Output: $499 MXN



//   Example:
//   const services = [
//   { name: "Starter Package", price: 499 },
//   { name: "Small Business", price: 899 },
//   { name: "Pro Business", price: 1499 }
// ];

// services.map(service => (
//   <div key={service.name}>
//     <h3>{service.name}</h3>
//     <p>{formatPrice(service.price)}</p>
//   </div>
// ));